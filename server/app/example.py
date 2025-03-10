import requests
import json 
res = requests.get('API ENDPOINT')
response = json.loads(res.text)
print(response)