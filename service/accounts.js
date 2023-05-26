const accounts = function(mock) {
    return mock
        .post('/accounts/create', {
            'phone': '0123456789', // 10 characters, start with 0
            'name': 'Nguyen Van A',
            'email': 'myemail@example.com', // unique, valid email
            'password': '12345678', // 8-20 characters
        }) // Create a new account
        .any()
        .reply(200, {
            'phone': '0123456789',
            'name': 'Nguyen Van A',
            'email': 'myemail@example.com',
        })

        .get('/accounts/1') // Get account info
        .any()
        .reply(200, {
            'phone': '0123456789',
            'name': 'Nguyen Van A',
            'email': 'myemail@example.com',
        })
}

module.exports = accounts;