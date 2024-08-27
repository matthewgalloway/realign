#!/bin/sh

set -e

# Function to check if Postgres is ready
postgres_ready() {
python << END
import sys
import psycopg2
try:
    psycopg2.connect(
        dbname="${DB_NAME}",
        user="${DB_USER}",
        password="${DB_PASSWORD}",
        host="${DB_HOST}"
    )
except psycopg2.OperationalError:
    sys.exit(-1)
sys.exit(0)
END
}

# Wait for Postgres to become available
until postgres_ready; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"

# Run database migrations
if [ ! -d migrations ]; then
    flask db init
fi
flask db migrate
flask db upgrade

# Start the Flask application
flask run --host=0.0.0.0