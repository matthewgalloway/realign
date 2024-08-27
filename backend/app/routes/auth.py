from flask import Blueprint, request, jsonify
from flask_login import login_user, logout_user, login_required, current_user
from app import db
from app.models.user import User
from datetime import datetime
import jwt
import logging
from ..config import Config
from flask_jwt_extended import create_access_token, jwt_required
# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

bp = Blueprint('auth', __name__)

@bp.route('/register', methods=['POST'])
def register():
    logger.info(f"Received registration request from IP: {request.remote_addr}")
    data = request.get_json()
    user = User(username=data['username'], email=data['email'])
    user.set_password(data['password'])
    db.session.add(user)
    db.session.commit()
    logger.info(f"User registered successfully: {user.username}")
    
    token = create_access_token(identity=user.id)
    return jsonify({'message': 'Registered successfully', 'token': token}), 201

@bp.route('/login', methods=['POST'])
def login():
    logger.info(f"Received login request from IP: {request.remote_addr}")
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if user and user.check_password(data['password']):
        login_user(user)
        user.last_login = datetime.utcnow()
        db.session.commit()
        token = create_access_token(identity=user.id)
        logger.info(f"User logged in successfully: {user.username}")
        return jsonify({'message': 'Logged in successfully', 'token': token}), 200

@bp.route('/logout')
@login_required
def logout():
    logger.info(f"Logout request received for user: {current_user.username}")
    logout_user()
    logger.info("User logged out successfully")
    return jsonify({'message': 'Logged out successfully'}), 200

@bp.before_request
def log_request_info():
    logger.info(f"Request: {request.method} {request.url}")
    logger.info(f"Headers: {request.headers}")
    logger.info(f"Body: {request.get_data()}")

@bp.after_request
def log_response_info(response):
    logger.info(f"Response: {response.status}")
    logger.info(f"Headers: {response.headers}")
    logger.info(f"Body: {response.get_data()}")
    return response