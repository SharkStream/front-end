import urllib3
import requests

http = urllib3.PoolManager()
headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
    "Accept-Encoding": "gzip, deflate",
    "Content-Type": "application/json",
    "Connection": "keep-alive",
    "Upgrade-Insecure-Requests": 1,
    "Cache-Control": "max-age=0",
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
}
url = "http://127.0.0.1:3500/"


def test_get_users():
    api = "users"
    r = http.request("GET", url+api, headers=headers)
    print(r.status)
    print(r.data.decode("utf-8"))


def test_post_users():
    api = "users"
    data = {
        "username": "Ken",
        "password": "!hb12345",
        "roles": ["Employee"]
    }
    r = requests.post(url+api, json=data)
    # r = http.request("POST", url+api, fields=data, headers=headers)
    print(r.status_code)
    print(r.json())


def test_update_users():
    api = "users"
    data = {
        "id": "63fc6f6c47e237d7cfe0cc2f", 
        "username": "Ken",
        "roles": ["Employee"], 
        "active": True, 
        "__v": 0
    }
    r = requests.patch(url+api, json=data)
    print(r.status_code)
    print(r.json())

def test_delete_users():
    api = "users"
    data = {
        "id": "63fc6f6c47e237d7cfe0cc2f",
    }
    r = requests.delete(url+api, json=data)
    print(r.status_code)
    print(r.json())


test_get_users()
# test_post_users()
# test_update_users()
# test_delete_users()
