import os
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

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
