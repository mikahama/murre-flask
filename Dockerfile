FROM tiangolo/uwsgi-nginx-flask:python3.8

RUN pip install --upgrade pip && \
pip install murre

COPY ./app /app