import os
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta
from urllib.request import urlopen
from urllib.error import URLError
from flask import Flask, render_template, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from werkzeug.middleware.proxy_fix import ProxyFix


class Base(DeclarativeBase):
    pass


db = SQLAlchemy(model_class=Base)
# create the app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET")
app.wsgi_app = ProxyFix(app.wsgi_app, x_proto=1, x_host=1)

# configure the database
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL")
app.config["SQLALCHEMY_ENGINE_OPTIONS"] = {
    "pool_recycle": 300,
    "pool_pre_ping": True,
}
# initialize the app with the extension
db.init_app(app)

with app.app_context():
    import models
    db.create_all()

    # Initialize counter if not exists
    if models.VisitorCounter.query.first() is None:
        counter = models.VisitorCounter()
        counter.count = 0
        db.session.add(counter)
        db.session.commit()


@app.before_request
def increment_visitor_counter():
    from flask import request
    # Don't count static file requests
    if request.endpoint and request.endpoint != 'static':
        counter = models.VisitorCounter.query.first()
        if counter:
            counter.count += 1
            db.session.commit()


@app.context_processor
def inject_visitor_count():
    counter = models.VisitorCounter.query.first()
    return dict(visitor_count=counter.count if counter else 0)


@app.route('/')
def index():
    return redirect(url_for('calculator'))


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


# WordPress Blog RSS Feed Integration
RSS_FEED_URL = 'https://powerlosscalc.wordpress.com/feed/'
blog_cache = {'posts': [], 'timestamp': None}
CACHE_DURATION = timedelta(minutes=10)  # Cache for 10 minutes


def fetch_wordpress_posts(limit=10):
    """Fetch latest posts from WordPress RSS feed with caching"""
    global blog_cache
    
    # Check cache
    if blog_cache['timestamp'] and datetime.now() - blog_cache['timestamp'] < CACHE_DURATION:
        return blog_cache['posts']
    
    posts = []
    try:
        # Fetch RSS feed
        with urlopen(RSS_FEED_URL, timeout=10) as response:
            content = response.read()
        
        # Parse XML
        root = ET.fromstring(content)
        
        # Find all items (posts)
        for item in root.findall('.//item')[:limit]:
            post = {}
            
            # Extract basic fields
            title_elem = item.find('title')
            link_elem = item.find('link')
            desc_elem = item.find('description')
            pub_date_elem = item.find('pubDate')
            
            post['title'] = title_elem.text if title_elem is not None else 'Без заглавие'
            post['link'] = link_elem.text if link_elem is not None else '#'
            post['description'] = desc_elem.text if desc_elem is not None else ''
            
            # Parse date
            if pub_date_elem is not None and pub_date_elem.text:
                try:
                    # WordPress RSS date format: "Wed, 27 Oct 2025 10:30:00 +0000"
                    date_str = pub_date_elem.text
                    post['date'] = datetime.strptime(date_str, '%a, %d %b %Y %H:%M:%S %z')
                    post['date_formatted'] = post['date'].strftime('%d.%m.%Y')
                except:
                    post['date'] = None
                    post['date_formatted'] = ''
            else:
                post['date'] = None
                post['date_formatted'] = ''
            
            # Try to extract image from content:encoded or media:thumbnail
            image_url = None
            
            # Check for media:thumbnail
            for child in item:
                if 'thumbnail' in child.tag:
                    image_url = child.attrib.get('url', None)
                    break
            
            # Check for content:encoded with <img> tag
            if not image_url:
                content_elem = item.find('.//{http://purl.org/rss/1.0/modules/content/}encoded')
                if content_elem is not None and content_elem.text:
                    # Simple regex to find first image
                    import re
                    img_match = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', content_elem.text)
                    if img_match:
                        image_url = img_match.group(1)
            
            post['image'] = image_url if image_url else None
            
            posts.append(post)
        
        # Update cache
        blog_cache['posts'] = posts
        blog_cache['timestamp'] = datetime.now()
        
    except URLError as e:
        # Network error - return cached data if available
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
        # XML parsing error or other error
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
    """Blog page showing WordPress posts"""
    posts = fetch_wordpress_posts(limit=10)
    return render_template('blog.html', posts=posts, blog_url='https://powerlosscalc.wordpress.com')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
