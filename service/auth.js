const auth = function(mock) {
    return mock
        .post('/auth/login', {
            "phone": "0123456789",
            "password": "12345678",
        })
        .any()
        .reply(200, {
            "timestamp": 1685298895074,
            "phone": "0123456789",
            "accessToken": "1234567890",
            "refreshToken": "123456789999",
        })

        .post('/auth/logout')
        .any()
        .reply(200, {
            "timestamp": 1685298895074,
            "status": "SUCCESS"
        })

        .post('/auth/refresh', {
            refreshToken: "123456789999",
        })
        .any()
        .reply(200, {
            "timestamp": 1685298895074,
            "phone": "0123456789",
            "accessToken": "1234567890",
            "refreshToken": "123456789999",
        });
}

module.exports = auth;