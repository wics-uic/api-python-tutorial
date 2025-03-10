import requests
import json 
res = requests.get('https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount1')
response = json.loads(res.text)