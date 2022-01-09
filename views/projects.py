from flask import Blueprint, render_template

projects = Blueprint('projects', __name__)

@projects.route('/')
def form():
    return render_template('projects/projects.html')

@projects.route('/umoria')
def umoria():
    return render_template('projects/umoria.html')

@projects.route('/farminfarm')
def farminfarm():
    return render_template('projects/farminfarm.html')

@projects.route('/around-the-clock')
def around_the_clock():
    return render_template('projects/around-the-clock.html')