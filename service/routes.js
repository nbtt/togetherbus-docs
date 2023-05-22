const routes = function(mock) {
    return mock
        .get('/routes') // get all routes
        .any()
        .reply(200, {
            routes: [
                {
                    "busNo": "08", // bus route number
                    "operatingTime": "10:20 - 20:30", // format: "hh:mm - hh:mm"
                    "price": 10, // 10 000 VND, unit: 1000 VND
                    "name": "Bến Xe Buýt Quận 8- Đại học Quốc Gia" // display route name
                },
                {
                    "busNo": "60-1",
                    "operatingTime": "05:20 - 10:40",
                    "price": 7,
                    "name": "Test tuyến"
                }
            ],
            total: 2,
        })
}

module.exports = routes;