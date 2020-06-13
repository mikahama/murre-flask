FROM tiangolo/meinheld-gunicorn-flask:python3.7

RUN pip install --upgrade pip && \
pip install murre && \
python3 -m murre.download

COPY ./app /app