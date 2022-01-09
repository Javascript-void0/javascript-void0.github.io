from flask import Blueprint, render_template

docs = Blueprint('docs', __name__)

@docs.route('/')
def form():
    return render_template('docs/docs.html')