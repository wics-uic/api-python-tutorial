from flask import Flask
from flask import request
from flask_cors import CORS

app = Flask(__name__)

# To allow CORS from our frontend ..
CORS(app)

@app.route("/question", methods=['GET'])
def getTriviaQuestion():
    questions = [
        {'question' : 'When was WiCS founded?', 'answer': '2013', 'id':1},
        {'question' : 'What class code is Advanced Data Structures?', 'answer': 'CS351', 'id':2},
        {'question' : 'Where is the WiCS Lounge', 'answer': 'inside the CS Lounge', 'id':3},
        {'question' : 'Who is the head of department of UIC CS', 'answer': 'Prof Bob Sloan', 'id':4},
        {'question' : 'Who is WiCS Faculty Advisor', 'answer': 'Prof Shanon Reckinger', 'id':5},
        {'question' : 'What is WiCS biggest event', 'answer': 'Scavenger Hunt', 'id':6},
        {'question' : 'When was the first SparkHacks?', 'answer': '2023', 'id':7},
        {'question' : 'Who is teaching CS361', 'answer': 'Prof Maratos', 'id':8}
    ]

    result = []
            
    return result

@app.route("/")
def hello():
    return 'hello world'
        





