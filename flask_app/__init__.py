import os

from flask import Flask, send_from_directory

if 'dev' in os.environ:
    os.environ['MONGO_URL'] = 'mongodb://localhost:27017/'
    app = Flask(__name__)
else:
    app = Flask(__name__, static_folder='../react-client/build')

    # Serve React App
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve(path):
        if path != "" and os.path.exists(app.static_folder + '/' + path):
            return send_from_directory(app.static_folder, path)
        else:
            return send_from_directory(app.static_folder, 'index.html')
