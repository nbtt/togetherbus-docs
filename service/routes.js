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
        .get('/routes/08/stops') // get all stops of route 08
        .any()
        .reply(200, {
            stops: [
                {
                    "name": "Bến Xe Buýt Quận 8", // stop name
                    "address": "Số 1, Đường Tạ Quang Bửu, Phường 6, Quận 8, TP.HCM", // stop address
                    "lat": "10.7403", // The latitude of this stop
                    "lng": "106.663", // The longitude of this stop
                    "order": 0 // The order of this stop in route
                },
                { //next stop
                    "name": "Đại học Quốc Gia", 
                    "address": "Số 1, Đường Đại Học Quốc Gia, Phường Linh Trung, Quận Thủ Đức, TP.HCM",
                    "lat": "10.8703",
                    "lng": "106.803",
                    "order": 1
                }
            ],
            total: 2,
        })
}

module.exports = routes;