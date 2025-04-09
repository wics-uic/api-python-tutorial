from flask import Flask
from flask import request
from flask_cors import CORS

app = Flask(__name__)

# To allow CORS from our frontend ..
CORS(app)

@app.route("/question", methods=['GET'])
def getTriviaQuestion():
    
    questions = [
        {'question' : 'What is the Green Mountain in Oman?', 'answer': 'Jabal Akhdar', 'id':1},
        {'question' : 'What is the capital of Oman', 'answer': 'Muscat', 'id':2},
        {'question' : 'Where is the WiCS Lounge', 'answer': 'inside the CS Lounge', 'id':3},
        {'question' : 'What was the old name of UTAS', 'answer': 'Higher College of Technology', 'id':4},
        {'question' : 'What is the official language of Oman', 'answer': 'Arabic', 'id':5},
        {'question' : 'Which sea surrounds Oman', 'answer': 'Arabian Sea', 'id':6},
        {'question' : 'When is National Day?', 'answer': 'November 18', 'id':7}
    ]

    result = []
    num_questions = request.args.get('amount')

    for i in range(int(num_questions)):
        result.append(questions[i])
            
    return result

@app.route("/muscat/oman")
def muscat():
    return 'hello muscat, oman'

@app.route("/")
def hello():
    return 'hello world'
        





