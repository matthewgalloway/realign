import logging
from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app import db
from app.models.activity_log import ActivityLog
from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain.schema.output_parser import StrOutputParser
from langchain.schema.runnable import RunnablePassthrough
from advice.advice_prompt import advice_prompt, advice_output_parser
from flask_jwt_extended import jwt_required, get_jwt_identity

# Set up logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

bp = Blueprint('speech', __name__)

@bp.route('/generate-speech', methods=['POST'])
@jwt_required()
def generate_speech():
    logger.info("Entering generate_speech function")

    try:
        logger.debug("Parsing request JSON data")
        data = request.json

        if not data:
            logger.warning("No JSON data received")
            return jsonify({"error": "No JSON data received"}), 400

        original_text = data.get('originalText')
        questions = data.get('questions')
        answers = data.get('answers')

        if not original_text or not questions or not answers:
            logger.warning("Missing required fields in JSON data")
            return jsonify({"error": "Missing required fields"}), 400

        logger.debug(f"Original text: {original_text}")
        logger.debug(f"Questions: {questions}")
        logger.debug(f"Answers: {answers}")

        question_answers = "\n".join([f"Question: {q}\nAnswer: {a}" for q, a in zip(questions, answers)])
        logger.debug(f"Combined question and answer string: {question_answers}")

        # Initialize ChatOpenAI model
        logger.info("Initializing ChatOpenAI model")
        model = ChatOpenAI(model_name="gpt-4o", temperature=0.3)

        # Create the prompt template
        logger.info("Creating prompt template")
        prompt = ChatPromptTemplate.from_template(advice_prompt)

        # Create the runnable sequence
        logger.info("Creating runnable sequence")
        chain = (
            {"original_text": RunnablePassthrough(),
             "question_answers": RunnablePassthrough(),
              "format_instructions": lambda _: advice_output_parser.get_format_instructions()}
            | prompt
            | model
            | StrOutputParser()
        )

        # Run the chain
        logger.info("Running the chain")
        result = chain.invoke({
            "original_text": original_text,
            "question_answers": question_answers
        })
        logger.debug(f"Chain result: {result}")

        # Parse the output
        logger.info("Parsing the output from the model")
        processed_speech = advice_output_parser.parse(result)
        logger.debug(f"Processed speech: {processed_speech}")

        user_id = get_jwt_identity()
        logger.info(f"User ID obtained from JWT: {user_id}")

        # Log the activity
        logger.info("Creating activity log entry")
        activity_log = ActivityLog(
            user_id=user_id,
            activity_type='generate_speech',
            details={
                'original_text': original_text,
                'questions_and_answers': question_answers,
                'processed_speech': processed_speech
            }
        )
        db.session.add(activity_log)

        logger.info("Committing activity log to the database")
        db.session.commit()

        logger.info("Returning the processed speech to the client")
        return jsonify({"speech": processed_speech})

    except Exception as e:
        logger.error(f"An error occurred: {str(e)}", exc_info=True)
        db.session.rollback()
        logger.info("Database session rolled back")
        return jsonify({"error": str(e)}), 500

    finally:
        logger.info("Exiting generate_speech function")
