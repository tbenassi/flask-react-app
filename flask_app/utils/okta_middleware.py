import json
import os
from functools import wraps

from flask import request
from okta_jwt.jwt import validate_token
from pathlib import Path
from dotenv import load_dotenv

dotenv_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'react-client', '.env'))
load_dotenv(dotenv_path)

CLIENT_ID = os.getenv('REACT_APP_OKTA_CLIENT_ID')
ISSUER = os.getenv('REACT_APP_OKTA_ISSUER')
AUDIENCE = os.getenv('REACT_APP_OKTA_AUDIENCE')


def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        auth_header = request.headers.get("authorization", None)
        if not auth_header:
            return json.dumps({'error': 'no authorization token provided'}), 403, {'Content-type': 'application/json'}

        # noinspection PyBroadException
        try:
            token = auth_header.split(' ')[1]
            resp = validate_token(token, ISSUER, AUDIENCE, CLIENT_ID)
            user = resp['sub']

        except Exception as e:
            print(e)
            return json.dumps({'error': 'invalid authorization token'}), 403, {'Content-type': 'application/json'}

        return f(user, *args, **kwargs)

    return wrap
