FROM postgres:latest

# install Python 3
RUN apt-get update && apt-get install -y python3 python3-pip
RUN apt-get -y install python3.7-dev
RUN apt-get -y install postgresql-server-dev-10

RUN pip3 install psycopg2 Django graphene-django pgspecial

ENV PYTHONUNBUFFERED=1
WORKDIR /backend
COPY requirements.txt /backend/
RUN pip3 install -r requirements.txt

# add the 'postgres' admin role
USER postgres

# expose Postgres port
EXPOSE 5432

# expose port for Django
EXPOSE 8000
