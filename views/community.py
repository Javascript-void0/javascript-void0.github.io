from flask import Blueprint, render_template

community = Blueprint('community', __name__)

@community.route('/')
def form():
    return render_template('community/community.html')