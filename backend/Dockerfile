FROM python:3.8-slim
RUN apt-get update && apt-get install -y postgresql-client
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh
# CMD ["flask", "run", "--host=0.0.0.0"]
ENTRYPOINT ["/app/entrypoint.sh"]   


