/*
This method is only for verifying if this project is working correctly.
It is not related to TogetherBus service.
*/
const orders = function(mock) {
    return mock
        .get('/orders/accounts/000000000')
        .any()
        .reply(200, [
            { // order 1
                "id": 32,
                "created_time": "2023-05-26T01:53:43.000Z",
                "discount": "0",
                "amount": "100000",
                "accountPhone": "000000000"
            }, { // order 2
                "id": 33,
                "created_time": "2023-05-26T01:54:35.000Z",
                "discount": "0",
                "amount": "0",
                "accountPhone": "000000000"
            }, {
                "id": 34,
                "created_time": "2023-05-26T01:55:00.000Z",
                "discount": "0",
                "amount": "100000",
                "accountPhone": "000000000"
            }]  
        )
        .post('/orders')
        .body({
            "accountId": "000000000", // it is account phone
            "items": [
                {
                    "routeBusNo": "01",  // route bus string
                    "amount": "100000", // total amount string bigint
                    "discount": "0", // discount string bigint
                    "quantity": 1, // quantity number integer
                }
            ]
        })
        .reply(201, {
            status: 'OK'
        });
}

module.exports = ping;