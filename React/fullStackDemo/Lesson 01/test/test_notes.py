from common import url, headers, request

def test_get_notes():
    api = "notes"
    r = request.get(url+api, headers=headers)
    print(r.status_code)
    print(r.json())
    
def test_post_notes():
    api = "notes"
    data = {
        "user": "63fc707647e237d7cfe0cc33",
        "title": "Welcome Homex",
        "text": "Welcome to the new world"
    }
    r = request.post(url+api, json=data)
    print(r.status_code)
    print(r.json())

def test_update_notes():
    api = "notes"
    data = {
        "id": "63fdab59ee455993d31b4ea0",
        "user": "63fdaaaeee455993d31b4e9b",
        "title": "Welcome baba",
        "text": "Welcome to the another world",
        "completed": True
    }
    r = request.patch(url+api, json=data)
    print(r.status_code)
    print(r.json())

def test_delete_notes():
    api = "notes"
    data = {
        "id": "63fdadd16bb978e6a8c5f312",
    }
    r = request.delete(url+api, json=data)
    print(r.status_code)
    print(r.json())


# test_post_notes()
# test_update_notes()
test_delete_notes()
test_get_notes()