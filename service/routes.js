const routes = function(mock) {
    return mock
        .get('/routes') // get all routes
        .any()
        .reply(200, {
            routes: [
                {
                    "busNo": "08", // bus route number
                    "operatingTime": "04:40 - 20:30", // operating time, format: "hh:mm - hh:mm"
                    "price": "7000", // 10 000 VND
                    "name": "Bến Xe Buýt Quận 8- Đại học Quốc Gia" // display route name
                },
                {
                    "busNo": "60-1",
                    "operatingTime": "05:20 - 10:40",
                    "price": "7000",
                    "name": "Test tuyến"
                }
            ],
            total: 2,
        })
        .get('/routes/08') // get route by busNo
        .any()
        .reply(200, {
            "busNo": "08", // bus route number
            "operatingTime": "04:40 - 20:30", // operating time, format: "hh:mm - hh:mm"
            "price": "7000",    //  (VND)
            "priceStudent": "3000", // price for student (VND)
            "priceGroup": "157500", // price for group (VND)
            "name": "Bến Xe Buýt Quận 8- Đại học Quốc Gia",
            "type": "Phổ thông - Có trợ giá"
        })
        
}

module.exports = routes;