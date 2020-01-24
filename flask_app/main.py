from flask_app import app  # Initialized in __init__.py
from flask_app.routes.click_counter_route import click_counter_bp

app.register_blueprint(click_counter_bp)

if __name__ == '__main__':
    app.run(host='localhost', use_reloader=True, port=5000, threaded=True)
