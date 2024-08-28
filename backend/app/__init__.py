from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from .config import Config
from flask_migrate import Migrate
from .config import Config
from flask_jwt_extended import JWTManager
jwt = JWTManager()
migrate = Migrate()

db = SQLAlchemy()
login_manager = LoginManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    app.config['JWT_TOKEN_LOCATION'] = ['headers']
    app.config['JWT_HEADER_NAME'] = 'Authorization'
    app.config['JWT_HEADER_TYPE'] = 'Bearer'
    app.config['JWT_SECRET_KEY'] = Config.SECRET_KEY

    db.init_app(app)
    migrate.init_app(app, db)
    login_manager.init_app(app)
    jwt.init_app(app)
    CORS(app)

    from .routes import auth, questions, speech
    app.register_blueprint(auth.bp)
    app.register_blueprint(questions.bp)
    app.register_blueprint(speech.bp)

    return app