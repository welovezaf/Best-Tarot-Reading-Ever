import time
import json
# from helpers import get_all_cards
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

# @app.route('/cards/<list:indices_list>')
# def get_cards_from_list(indicies_list):
#     deck = get_all_cards()
#     cards_list = []
#     for i in indicies_list:
#         cards_list.append(deck["cards"][i])
#     return cards_list

