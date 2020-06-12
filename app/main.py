#encoding: utf-8
from flask import Flask
from flask import render_template
from murre import dialectalize_sentence, supported_dialects
import os
import json
from flask import g, request, jsonify
app = Flask(__name__)

BASE_DIR = os.path.dirname(__file__)

dials = supported_dialects()
dials.sort()


@app.route('/')
def index():
    return render_template('index.html', dialects= dials)

@app.route('/api', methods=['POST'])
def api():
    text = request.form['text']
    dialect = request.form['dialect']
    d = {}
    d["result"] = dialectalize_sentence(text, dialect)
    return jsonify(d)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)