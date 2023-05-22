const http = require('http')
const hock = require('hock')
const request = require('request')
const service = require('./service')

const mock = hock.createHock({
    throwOnUnmatched: false,
})

Object.keys(service).forEach((groupKey) => {
    service[groupKey](mock);
});

const server = http.createServer(mock.handler);
server.listen(1337);

process.on('uncaughtException', (e) => {
    console.log('err');
});