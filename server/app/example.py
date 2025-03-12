import requests
import json 
res = requests.get('https://jsonplaceholder.typicode.com/posts/12')
response = json.loads(res.text)
print(response['body'])