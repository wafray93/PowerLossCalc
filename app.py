import os
from flask import Flask, render_template, redirect, url_for

# create the app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET")

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

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
