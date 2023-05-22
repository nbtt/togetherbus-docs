# TogetherBus - Service documentation

## Description

API documentation of service of TogetherBus.

## Documentation

Documentation of methods provided by TogetherBus Service is available at `./service/`

## How to run the mock

### Prerequisite

- yarn: 3.3.0

### Installation

```bash
yarn install
```

### Run

```bash
yarn start
```

Then with another terminal execute

```bash
curl -i -X GET localhost:1337/ping/200
curl -i -X GET localhost:1337/ping/201
```

If the output is similar to below output than the installation is success.

```sh
$ curl -i -X GET localhost:1337/ping/
HTTP/1.1 200 OK
Date: Sun, 11 Dec 2022 10:07:41 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

{"status":"Success"}%

$ curl -i -X GET localhost:1337/ping/
HTTP/1.1 201 Created
Date: Sun, 11 Dec 2022 10:07:42 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

{"status":"OK"}%
```

## How to write new API docs

### Basic

Create a file in `service/`, for example, `service/new-service.js` with the following content

```js
const util = require('./util');

const newService = function(mock) {
    return mock
        .get('/new-service/ping')
        .any()
        .reply(200, {
            message: 'OK',
        })

        .get('/new-service/all?offset=15&limit=10', util.buildAuthHeader())
        .any()
        .reply(200, {
            data: [
                {
                    name: 'Hello',
                    id: 1,
                }
            ],
            total: 1
        })
        
        .post('/new-service/add', {
            name: 'new',
        })
        .any()
        .reply(200);
}

module.exports = newService;
```

And add a line in `service/index.js`

```js
exports.newService = require('./new-service');
```

Then execute command

```bash
yarn start
```

Test:

```bash
curl -i -X GET "localhost:1337/new-service/ping"
curl -i -X GET "localhost:1337/new-service/all?offset=15&limit=10" -H "Authorization: Bearer token"
curl -i -X POST "localhost:1337/new-service/add" -d '{"name":"new"}'
```

### Syntax

More information: https://github.com/mmalecki/hock
Please add `.any()` after an request to call to that API multiple times.

#### Request

```js
mock.get(url, requestHeaders)
```

```js
mock.delete(url, requestHeaders)
```

```js
mock.post(url, body, requestHeaders)
```

```js
mock.put(url, body, requestHeaders)
```

```js
mock.head(url, requestHeaders)
```

#### Response

```js
req.reply(statusCode, body, responseHeaders);
```