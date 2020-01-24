from flask import request

from flask_app.routes import click_counter_bp, DB_CLIENT
from flask_app.utils.okta_middleware import login_required
from flask_app.utils.utils import json_response


@click_counter_bp.route('/api/click_counter', methods=['GET', 'POST'])
@login_required
def click_counter(user):
    if request.method == 'POST':
        new_count = DB_CLIENT.increment(user)['count']
        return json_response({'count': new_count})
    else:
        count = DB_CLIENT.get_count(user)['count']
        return json_response({'count': count})
