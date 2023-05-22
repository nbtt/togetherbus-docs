/*
This method is only for verifying if this project is working correctly.
It is not related to TogetherBus service.
*/
const ping = function(mock) {
    return mock
        .get('/ping/200')
        .any()
        .reply(200, {
            status: 'Success',
        })
        .get('/ping/201')
        .any()
        .reply(201, {
            status: 'OK',
        });
}

module.exports = ping;