from flask import Blueprint, render_template

portfolio = Blueprint('portfolio', __name__)

@portfolio.route('/')
def form():
    return render_template('portfolio/portfolio.html')

@portfolio.route('/test')
def test():
    return render_template('portfolio/test.html')