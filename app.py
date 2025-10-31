import os
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta
from urllib.request import urlopen
from urllib.error import URLError
from flask import Flask, render_template, redirect, url_for, send_from_directory, Response
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from werkzeug.middleware.proxy_fix import ProxyFix


# ✅ Database Base Model
class Base(DeclarativeBase):
    pass


db = SQLAlchemy(model_class=Base)

# ✅ Flask App Config
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET")
app.wsgi_app = ProxyFix(app.wsgi_app, x_proto=1, x_host=1)

# ✅ Database configuration
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL")
app.config["SQLALCHEMY_ENGINE_OPTIONS"] = {
    "pool_recycle": 300,
    "pool_pre_ping": True,
}

db.init_app(app)

# ✅ Create DB tables and visitor counter
with app.app_context():
    import models
    db.create_all()

    if models.VisitorCounter.query.first() is None:
        counter = models.VisitorCounter()
        counter.count = 0
        db.session.add(counter)
        db.session.commit()


# ✅ Count visitors (excluding static assets)
@app.before_request
def increment_visitor_counter():
    from flask import request
    if request.endpoint and request.endpoint != 'static':
        counter = models.VisitorCounter.query.first()
        if counter:
            counter.count += 1
            db.session.commit()


# ✅ Inject visitor count for templates
@app.context_processor
def inject_visitor_count():
    counter = models.VisitorCounter.query.first()
    return dict(visitor_count=counter.count if counter else 0)


# ✅ Homepage redirect
@app.route('/')
def index():
    return redirect(url_for('calculator'))


# ✅ Page routes
@app.route('/calculator')
def calculator():
    return render_template('calculator.html')


@app.route('/analysis')
def analysis():
    return render_template('analysis.html')


@app.route('/advanced')
def advanced():
    return render_template('advanced.html')


@app.route('/database')
def database():
    return render_template('database.html')


@app.route('/theory')
def theory():
    return render_template('theory.html')


@app.route('/tools')
def tools():
    return render_template('tools.html')


@app.route('/drivers')
def drivers():
    return render_template('drivers.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')


# ✅ Serve static verification files
@app.route('/ads.txt')
def serve_ads_txt():
    return send_from_directory('static', 'ads.txt')


@app.route('/sitemap.xml')
def serve_sitemap():
    return send_from_directory('static', 'sitemap.xml')


@app.route('/robots.txt')
def serve_robots_txt():
    return send_from_directory('static', 'robots.txt')


# ✅ WordPress Blog RSS Feed Integration
RSS_FEED_URL = 'https://powerlosscalc.wordpress.com/feed/'
blog_cache = {'posts': [], 'timestamp': None}
CACHE_DURATION = timedelta(minutes=10)


def fetch_wordpress_posts(limit=10):
    """Fetch latest posts from WordPress RSS feed with caching"""
    global blog_cache

    if blog_cache['timestamp'] and datetime.now() - blog_cache['timestamp'] < CACHE_DURATION:
        return blog_cache['posts']

    posts = []
    try:
        with urlopen(RSS_FEED_URL, timeout=10) as response:
            content = response.read()

        root = ET.fromstring(content)

        for item in root.findall('.//item')[:limit]:
            post = {}
            title_elem = item.find('title')
            link_elem = item.find('link')
            desc_elem = item.find('description')
            pub_date_elem = item.find('pubDate')

            post['title'] = title_elem.text if title_elem is not None else 'Без заглавие'
            post['link'] = link_elem.text if link_elem is not None else '#'
            post['description'] = desc_elem.text if desc_elem is not None else ''

            if pub_date_elem is not None and pub_date_elem.text:
                try:
                    date_str = pub_date_elem.text
                    post['date'] = datetime.strptime(date_str, '%a, %d %b %Y %H:%M:%S %z')
                    post['date_formatted'] = post['date'].strftime('%d.%m.%Y')
                except:
                    post['date'] = None
                    post['date_formatted'] = ''
            else:
                post['date'] = None
                post['date_formatted'] = ''

            image_url = None
            for child in item:
                if 'thumbnail' in child.tag:
                    image_url = child.attrib.get('url', None)
                    break

            if not image_url:
                content_elem = item.find('.//{http://purl.org/rss/1.0/modules/content/}encoded')
                if content_elem is not None and content_elem.text:
                    import re
                    img_match = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', content_elem.text)
                    if img_match:
                        image_url = img_match.group(1)

            post['image'] = image_url if image_url else None
            posts.append(post)

        blog_cache['posts'] = posts
        blog_cache['timestamp'] = datetime.now()

    except URLError:
        if blog_cache['posts']:
            return blog_cache['posts']
        posts = [{
            'title': 'Грешка при зареждане на блога',
            'description': 'Моля, опитайте отново по-късно.',
            'link': RSS_FEED_URL,
            'date_formatted': '',
            'image': None
        }]
    except Exception as e:
        if blog_cache['posts']:
            return blog_cache['posts']
        posts = [{
            'title': 'Временна грешка',
            'description': f'Не можем да заредим статиите: {str(e)}',
            'link': RSS_FEED_URL,
            'date_formatted': '',
            'image': None
        }]

    return posts


@app.route('/blog')
def blog():
    posts = fetch_wordpress_posts(limit=10)
    return render_template('blog.html', posts=posts, blog_url='https://powerlosscalc.wordpress.com')


# ✅ Custom 404 Error Page
@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404


# ✅ Security Header: HSTS
@app.after_request
def add_security_headers(response: Response):
    response.headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains; preload'
    return response


# ✅ Run app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
