from common import url, headers, request

def test_post_auth():
    api = 'auth'
    data = {
        'username': "Ken",
        'password': '123456'
    }
    r = request.post(url+api, headers=headers, json=data)
    print(r.status_code)
    print(r.json())


def test_get_auth_refresh():
    api = 'auth/refresh'
    cookie_string = "; ".join([str(x)+'='+str(y) for x,y in request.cookies.items()])
    headers['Cookies'] = cookie_string
    r = request.get(url+api, headers=headers)
    print(r.status_code)
    print(r.json())


test_post_auth()
# test_get_auth_refresh()
