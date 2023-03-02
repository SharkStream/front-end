from common import url, headers, request

def test_get_users():
    api = "users"
    # headers['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6IktlbiIsInJvbGVzIjpbIkVtcGxveWVlIiwiTWFuYWdlciIsIkFkbWluIl19LCJpYXQiOjE2Nzc3MjgxOTEsImV4cCI6MTY3NzcyODI1MX0.sy5V-G52kC2FRYvuKsOYUN23WkRQtL6kU5yfcsomhDY"
    r = request.get(url+api, headers=headers)
    print(r.status_code)
    print(r.json())


def test_post_users():
    api = "users"
    data = {
        "username": "Mic",
        "password": "!hb12345",
        "roles": ["Employee"]
    }
    r = request.post(url+api, json=data)
    # r = http.request("POST", url+api, fields=data, headers=headers)
    print(r.status_code)
    print(r.json())


def test_update_users():
    api = "users"
    data = {
        "id": "63fc6f6c47e237d7cfe0cc2f", 
        "username": "Mic",
        "roles": ["Employee"], 
        "active": True, 
        "__v": 0
    }
    r = request.patch(url+api, json=data)
    print(r.status_code)
    print(r.json())

def test_delete_users():
    api = "users"
    data = {
        "id": "63fc6f6c47e237d7cfe0cc2f",
    }
    r = request.delete(url+api, json=data)
    print(r.status_code)
    print(r.json())


test_get_users()
# test_post_users()
# test_update_users()
# test_delete_users()