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

# ✅ Create DB tables and visitor counter (first run bootstrap)
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
    # не броим заявки за статични файлове, sitemap, robots, ads.txt
    skip_endpoints = {'static', 'serve_sitemap', 'serve_ads_txt', 'serve_robots_txt'}
    if request.endpoint and request.endpoint not in skip_endpoints:
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


# ✅ Main app pages
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


@app.route('/privacy')
def privacy():
    return render_template('privacy.html')


@app.route('/terms')
def terms():
    return render_template('terms.html')


# ✅ Serve static verification / SEO files
@app.route('/ads.txt')
def serve_ads_txt():
    return send_from_directory('.', 'ads.txt', mimetype='text/plain')


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

    # cache hit?
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

            # дата
            if pub_date_elem is not None and pub_date_elem.text:
                try:
                    date_str = pub_date_elem.text
                    post['date'] = datetime.strptime(date_str, '%a, %d %b %Y %H:%M:%S %z')
                    post['date_formatted'] = post['date'].strftime('%d.%m.%Y')
                except Exception:
                    post['date'] = None
                    post['date_formatted'] = ''
            else:
                post['date'] = None
                post['date_formatted'] = ''

            # опитай да намериш картинка
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
        # fallback към кеша ако има
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


# ✅ Security Headers (improves HSTS / CSP / etc.)
@app.after_request
def add_security_headers(response: Response):
    # Force HTTPS for 1 year + subdomains
    response.headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains; preload'

    # Prevent clickjacking
    response.headers['X-Frame-Options'] = 'SAMEORIGIN'

    # Block MIME sniffing
    response.headers['X-Content-Type-Options'] = 'nosniff'

    # Control how much referrer info is leaked
    response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'

    # Lock down dangerous browser features (camera, mic, etc.)
    response.headers['Permissions-Policy'] = (
        "geolocation=(), microphone=(), camera=(), payment=()"
    )

    # Content Security Policy
    # Разрешаваме:
    #  - нашия собствен домейн ('self')
    #  - Google Tag Manager / Analytics (gtag)
    #  - AdSense (pagead2.googlesyndication.com)
    #  - Chart.js от cdn.jsdelivr.net
    #  - inline scripts ('unsafe-inline' за script.js inline код)
    #  - стилове от self (и inline стилистика 'unsafe-inline' защото имаш inline <style>)
    #  - изображения от self, data:, google, ads
    response.headers['Content-Security-Policy'] = (
        "default-src 'self'; "
        "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://www.googletagmanager.com https://pagead2.googlesyndication.com; "
        "img-src 'self' data: https: http:; "
        "style-src 'self' 'unsafe-inline'; "
        "frame-src https://www.youtube.com https://pagead2.googlesyndication.com; "
        "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com;"
    )

    return response


# ✅ Run app
if __name__ == '__main__':
    # debug=True е окей за разработка.
    # когато го пуснеш в production (Render), той така или иначе стартира с gunicorn.
    app.run(host='0.0.0.0', port=5000, debug=True)
