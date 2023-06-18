import time
import json
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("index.html", title="Hello")

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/cards')
def get_all_cards():
    f = open('./cards.json')
    data = json.load(f)
    return data

@app.route('/cards/<int:index>')
def get_card(index):
    f = open('./cards.json')
    data = json.load(f)
    card = data["cards"][index]
    return card
