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
        .reply(200, 
            {'goStops':[
                {
                    "code": "Q8", // stop code
                    "lat": "10.7403", // The latitude of this stop
                    "lng": "106.663", // The longitude of this stop
                    "name": "Bến Xe Buýt Quận 8", // stop name
                    "order": 0, // The order of this stop in route
                    "address": "Số 1, Đường Tạ Quang Bửu, Phường 6, Quận 8, TP.HCM", // stop address

                },
                { //next stop
                    "name": "Đại học Quốc Gia", 
                    "code": "DHQG",
                    "lat": "10.8703",
                    "lng": "106.803",
                    "name": "Bến Xe Buýt Quận 8", // stop name
                    "order": 1,
                    "address": "Số 1, Đường Đại Học Quốc Gia, Phường Linh Trung, Quận Thủ Đức, TP.HCM",

                }
            ],
            'returnStops': [ // return stops of route 08
                {
                    "name": "Đai học Quốc Gia",
                    "code": "DHQG",
                    "lat": "10.8703",
                    "lng": "106.803",
                    "name": "Bến Xe Buýt Quận 8", 
                    "order": 0,
                    "address": "Số 1, Đường Đại Học Quốc Gia, Phường Linh Trung, Quận Thủ Đức, TP.HCM",
                },
                {
                    "name": "Bến Xe Buýt Quận 8",
                    "code": "Q8",
                    "lat": "10.7403",
                    "lng": "106.663",
                    "name": "Bến Xe Buýt Quận 8", 
                    "order": 1,
                    "address": "Số 1, Đường Tạ Quang Bửu, Phường 6, Quận 8, TP.HCM",
                }
            ]}
        )
        .get('/routes/08/timetables') // get all timetables of route 08
        .any()
        .reply(200, {// goTimes: go times of route 08
            "goTimes": [
                {
                    "start": "04:40", // start time
                    "end": "20:30", // end time
                },
            ],
            // returnTimes: return times of route 08
            "returnTimes": [
                {
                    "start": "04:40", // start time
                    "end": "20:30", // end time
                }
            ]
        })
                    
}

module.exports = routes;