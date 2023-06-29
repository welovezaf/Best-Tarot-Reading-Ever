import json

def get_all_cards():
    f = open('./cards.json')
    data = json.load(f)
    return data

deck = get_all_cards()

def get_card_json_data(index):
    # Return the card at the given index
    card = []
    return card

def get_cards_json_data(indicies_arr):
    # Return the cards at the given indicies
    cards = []
    return cards

def shuffle_arr(arr):
    # Shuffle the contents in the array
    # Each element should occur the same number of times as original array
    # Elements should be in a random order
    shuffled_arr = []
    return shuffled_arr

def calculate_reading_score(indicies_arr):
    # Calculate the reading score to determine which reading is shown to the user
    score = 0
    return score

def get_reading(score):
    # Determine which reading should be returned based on the reading score
    # JSON data for readings can be altered to fit function
    reading = {}
    return reading

def prepare_reading(indicies_arr):
    score = calculate_reading_score(indicies_arr)
    return get_reading(score)




