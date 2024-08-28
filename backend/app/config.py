import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')

    @classmethod
    def init_app(cls, app):
        # Log configuration
        app.logger.info(f"SECRET_KEY set: {'Yes' if cls.SECRET_KEY else 'No'}")
        app.logger.info(f"DATABASE_URL set: {'Yes' if cls.SQLALCHEMY_DATABASE_URI else 'No'}")
        app.logger.info(f"OPENAI_API_KEY set: {'Yes' if cls.OPENAI_API_KEY else 'No'}")

        # Validate required configuration
        if not cls.SECRET_KEY:
            raise ValueError("No SECRET_KEY set for Flask application")
        if not cls.SQLALCHEMY_DATABASE_URI:
            raise ValueError("No DATABASE_URL set for Flask application")
        if not cls.OPENAI_API_KEY:
            raise ValueError("No OPENAI_API_KEY set for Flask application")