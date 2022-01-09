from flask import Blueprint, render_template

community = Blueprint('community', __name__)

@community.route('/')
def form():
    return render_template('community/community.html')

@community.route('/jailbreak')
def jailbreak():
    return render_template('community/jailbreak.html')

@community.route('/right-to-repair')
def right_to_repair():
    return render_template('community/right-to-repair.html')

@community.route('/art')
def art():
    return render_template('community/art.html')

@community.route('/art/traditional')
def traditional():
    return render_template('community/traditional.html')

@community.route('/art/digital')
def digital():
    return render_template('community/digital.html')

@community.route('/art/animation')
def animation():
    return render_template('community/animation.html')

@community.route('/art/pixel')
def pixel():
    return render_template('community/pixel.html')

@community.route('/music')
def music():
    return render_template('community/music.html')

@community.route('/computer')
def computer():
    return render_template('community/computer.html')