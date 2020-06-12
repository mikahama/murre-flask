FROM tiangolo/uwsgi-nginx-flask:python3.8

RUN pip install --upgrade pip && \
pip install murre && \
python3 -m murre.download

COPY ./app /app