import requests
import json 
res = requests.get('https://jsonplaceholder.typicode.com/posts/7')
response = json.loads(res.text)
print(response)