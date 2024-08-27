import logging
from flask import Blueprint, request, jsonify, current_app
from flask_login import login_required, current_user
from app import db
from app.models.activity_log import ActivityLog
from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain.schema.output_parser import StrOutputParser
from langchain.schema.runnable import RunnablePassthrough
from investigation.investigation_prompt import investigation_prompt, investigation_output_parser
from flask_jwt_extended import jwt_required, get_jwt_identity
# Set up logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

bp = Blueprint('questions', __name__)

@bp.route('/generate-questions', methods=['POST'])
@jwt_required()
def generate_questions():
    
    logger.info("Entering generate_questions function")
    try:
        logger.debug("Parsing request data")
        data = request.json
        user_input = data.get('text')
        logger.info(f"Received user input: {user_input}")

        logger.debug("Initializing ChatOpenAI model")
        model = ChatOpenAI(model_name="gpt-4o", temperature=0.3)
        logger.info("ChatOpenAI model initialized")

        logger.debug("Creating prompt template")
        prompt = ChatPromptTemplate.from_template(investigation_prompt)
        logger.info("Prompt template created")

        logger.debug("Creating runnable sequence")
        chain = (
            {"user_input": RunnablePassthrough(), "format_instructions": lambda _: investigation_output_parser.get_format_instructions()}
            | prompt
            | model
            | StrOutputParser()
        )
        logger.info("Runnable sequence created")

        logger.debug("Invoking the chain")
        result = chain.invoke(user_input)
        logger.info("Chain invoked successfully")

        logger.debug("Parsing the output")
        parsed_output = investigation_output_parser.parse(result)
        logger.info("Output parsed successfully")
        user_id = get_jwt_identity()
        logger.debug("Creating activity log for user {user_id}")
        activity_log = ActivityLog(
            user_id=user_id,
            activity_type='generate_questions',
            details={'user_input': user_input, 'generated_questions': parsed_output}
        )
        logger.info("Activity log created")

        logger.debug("Adding activity log to database session")
        db.session.add(activity_log)
        
        logger.debug("Committing to database")
        db.session.commit()
        logger.info("Database commit successful")

        logger.info("Returning generated questions")
        return jsonify({"questions": parsed_output})

    except Exception as e:
        logger.error(f"An error occurred: {str(e)}", exc_info=True)
        db.session.rollback()
        logger.info("Database session rolled back")
        return jsonify({"error": str(e)}), 500

    finally:
        logger.info("Exiting generate_questions function")