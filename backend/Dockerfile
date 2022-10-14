FROM python:3

ENV PYTHONUNBUFFERED 1
RUN mkdir /backend
WORKDIR /backend
COPY . /backend/
RUN pip install -r requirements.txt
RUN python manage.py makemigrations
RUN python manage.py migrate