from flask import Flask, render_template
from views.projects import projects
from views.about import about
from views.community import community
from views.docs import docs
from views.portfolio import portfolio

app = Flask(__name__, static_url_path='/static')
app.register_blueprint(projects, url_prefix='/projects')
app.register_blueprint(about, url_prefix='/about')
app.register_blueprint(community, url_prefix='/community')
app.register_blueprint(docs, url_prefix='/docs')
app.register_blueprint(portfolio, url_prefix='/portfolio')

@app.route('/')
def index():
    return render_template('index.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.debug = True
    app.run()