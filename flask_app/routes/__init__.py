from flask import Blueprint
from flask_app.config.mongo import DBClient

DB_CLIENT = DBClient()
click_counter_bp = Blueprint('click_counter_bp', __name__)
