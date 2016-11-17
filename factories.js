var app = angular.module('hotelApp');
	
    app.factory('Hotel', function() {

            var hotels = [
            { id: 342, name: 'This Hotel', image: 'img/pier.jpg', rating: '8.5', price: '4349', stars: '3'
            },
            { id: 343, name: 'Hotel Sweet Hotel', image: 'img/car.jpg', rating: '8.3', price: '2329', stars: '3'
            },
            { id: 344, name: 'Our Own Hotel', image: 'img/glassHat.jpg', rating: '8.0', price: '1389', stars: '3'
            },
            { id: 345, name: 'That Hotel', image: 'img/slippers.jpg', rating: '8.5', price: '4349', stars: '3'
            },
            { id: 346, name: 'Not The Best Hotel', image: 'img/slipperCoconut.jpg', rating: '8.3', price: '2000', stars: '3'
            },
            { id: 347, name: 'We Could Be Better', image: 'img/oceanPier.jpg', rating: '8.0', price: '1389', stars: '3'
            },
            { id: 348, name: 'This Hotel', image: 'img/hammock.jpg', rating: '8.5', price: '4349', stars: '3'
            },
            { id: 349, name: 'Not The Best Hotel', image: 'img/maldives.jpg', rating: '8.3', price: '2329', stars: '3'
            },
            { id: 350, name: 'We Could Be Better', image: 'img/pretty.jpg', rating: '8.0', price: '1389', stars: '3'
            },
            { id: 351, name: 'We are cool!', image: 'img/pier.jpg', rating: '8.5', price: '4349', stars: '3'
            },
            { id: 352, name: 'Hotel Sweet Hotel', image: 'img/car.jpg', rating: '8.3', price: '2329', stars: '3'
            },
            { id: 353, name: 'Our Own Hotel', image: 'img/glassHat.jpg', rating: '8.0', price: '1389', stars: '3'
            },
            { id: 354, name: 'That Hotel', image: 'img/slippers.jpg', rating: '8.5', price: '4349', stars: '3'
            },
            { id: 355, name: 'Not The Best Hotel', image: 'img/slipperCoconut.jpg', rating: '8.3', price: '2329', stars: '3'
            },
            { id: 356, name: 'We Could Be Better', image: 'img/oceanPier.jpg', rating: '8.0', price: '1389', stars: '3'
            },
            { id: 357, name: 'Our Hotel', image: 'img/hammock.jpg', rating: '8.5', price: '4349', stars: '3'
            },
            { id: 358, name: 'Not The Best Hotel', image: 'img/maldives.jpg', rating: '8.3', price: '2329', stars: '3'
            },
            { id: 359, name: 'We Could Be Better', image: 'img/pretty.jpg', rating: '8.0', price: '1389', stars: '3'
            }
            ];

            return { 
                get: function(offset, limit) {     
                    return hotels.slice(offset, offset+limit); 
                }, 
                total: function() {     
                    return hotels.length; 
                },
                getHotels: function() {
                    return hotels[4];
                }
            };
        });


    app.factory('Review', function() {
            var reviews = [
            { body: 'that was a great stay, enjoyed it waaay too much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            { body: 'it was crazy', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Marylin Monroe'
            },
            { body: 'not much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Lady Gaga'
            },
            { body: 'lol', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Britney Spears'
            },
            { body: 'that was a great stay, enjoyed it waaay too much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            { body: 'boooobooo', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Christie'
            },
            { body: 'that was a great stay, enjoyed it waaay too much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            { body: 'that was a great stay, enjoyed it waaay too much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            { body: 'that was a great stay, enjoyed it waaay too much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            { body: 'that was a great stay, enjoyed it waaay too much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            { body: 'that was a great stay, enjoyed it waaay too much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            }
            ];

            return { 
                get: function(offset, limit) {     
                    return reviews.slice(offset, offset+limit); 
                }, 
                total: function() {     
                    return reviews.length; 
                }
            };
        });

        app.factory('Booking', function() {
            var bookings = [
            {id: '34362342', arrival: '17-11-2016', departure: '19-11-2016', name: 'Mike Lol', email: 'angie@gmail.com', price: '2000', hotelName: 'This Hotel', image: 'img/pretty.jpg', roomNum: 6},
            {id: '34362343', arrival: '15-12-2016', departure: '17-12-2016', name: 'Mike Lol', email: 'angie@gmail.com', price: '2000', hotelName: 'Sweet Home Sweet', image: 'img/pretty.jpg', roomNum: 4},
            {id: '24362344', arrival: '20-12-2016', departure: '28-12-2016', name: 'Mike Lol', email: 'angie@gmail.com', price: '8000', hotelName: 'Hotel?', image: 'img/mojito.jpg', roomNum: 5},
            {id: '24362345', arrival: '31-12-2016', departure: '01-01-2017', name: 'Mike Lol', email: 'angie@gmail.com', price: '1000', hotelName: 'Sweet Home Sweet', image: 'img/pretty.jpg', roomNum: 7},
            {id: '14362346', arrival: '03-01-2017', departure: '04-01-2017', name: 'Mike Lol', email: 'angie@gmail.com', price: '1000', hotelName: 'Our Own Hotel', image: 'img/glassHat.jpg', roomNum: 7},
            {id: '64362347', arrival: '18-01-2017', departure: '19-01-2017', name: 'Mike Lol', email: 'angie@gmail.com', price: '1000', hotelName: 'Sweet Home Sweet', image: 'img/pretty.jpg', roomNum: 7},
            {id: '74362348', arrival: '20-01-2017', departure: '21-01-2017', name: 'Mike Lol', email: 'angie@gmail.com', price: '1000', hotelName: 'Our Own Hotel', image: 'img/glassHat.jpg', roomNum: 7},
            ];

            return {
                get: function() {
                    return bookings;
                }
            };
        });

        app.factory('User', function() {
            var user = {
                login: "angie",
                name: "Angelina Jolie",
                email: "angie@gmail.com",
                password: "72dfs83",
                position: 'manager'
            };

            var employees = [
                {login: "angie",
                name: "Angelina Jolie",
                email: "angie@gmail.com",
                password: "72dfs83",
                position: 'manager'},
                {login: "abby",
                name: "Abby Jolie",
                email: "abby@gmail.com",
                password: "72dfs83",
                position: 'receptionist'},
                {login: "anna",
                name: "Anna Jolie",
                email: "anna@gmail.com",
                password: "72dfs83",
                position: 'receptionist'},
                {login: "Nikola",
                name: "Nikola Jolie",
                email: "nikola@gmail.com",
                password: "72dfs83",
                position: 'cleaner'},
            ];

            return {
                get: function() {
                    return user;
                },
                emps: function() {
                    return employees;
                }
            };
        });

        app.factory('Reservation', function() {
            var reservation = {
                id: '54362342', arrival: '18-11-2016', departure: '20-11-2016', name: 'Mike', email: 'mike@gmail.com', price: '2000', hotelName: 'Not The Best Hotel', roomName: 'Single', image: 'img/glassHat.jpg'  
            };

            return {
                get: function() {
                    return reservation;
                }
            };
        });

        app.factory('Onehotel', function() {
            var onehotel = {id: 355, name: 'Not The Best Hotel', image: 'img/slipperCoconut.jpg', rating: '8.3', price: '2329', stars: '3', description: 'This is the most fantastic hotel evah! Can you imagine it? It is fantastic! Can you believe it? Wow wow!'
            };

            return {
                get: function() {
                    return onehotel;
                }
            };
        });

        app.factory('Room', function() {
            var rooms = [
            {level: 'economy', price: '890', image: 'img/glassHat.jpg', roomNum: 4},
            {level: 'suite', price: '8905', image: 'img/glassHat.jpg', roomNum: 5},
            {level: 'double', price: '5432', image: 'img/glassHat.jpg', roomNum: 6},
            {level: 'single', price: '1000', image: 'img/glassHat.jpg', roomNum: 7},
            {level: 'dorms', price: '890', image: 'img/glassHat.jpg', roomNum: 8},
            ];

            return {
                get: function() {
                    return rooms;
                }
            };
        });

        app.factory('RoomLevel', function() {
            var levels = [
            {level: 'economy', price: '890'},
            {level: 'single', price: '1000'},
            {level: 'double', price: '1500'},
            {level: 'suite', price: '3000'},
            ];

            return {
                get: function() {
                    return levels;
                }
            };
        });

        app.factory('ClientLevel', function() {
            var levels = [
            {bookingsAmount: 5, price: '3'},
            {bookingsAmount: 10,price: '5'},
            {bookingsAmount: 20, price: '7'},
            {bookingsAmount: 50, price: '10'},
            ];

            return {
                get: function() {
                    return levels;
                }
            };
        });

        app.factory('ToDo', function() {
            var todos = [
                {id: 0, roomNum: 1, done:false},
                {id: 1, roomNum: 2, done:false},
                {id: 2, roomNum: 3, done:false},
                {id: 3, roomNum: 4, done:false},
                {id: 4, roomNum: 5, done:false},
                {id: 5, roomNum: 6, done:false}
            ];
            
            return {
                get: function() {
                    return todos;
                }
            };
        });

        app.service('Role', function($http) {

            var api = "http://89.223.20.123:8080/api/";
            var role={};
            return {
                get: function() {
                    return role;
                }
            };
            
            $http({
                method: 'GET',
                url: api + "account/", 
                headers: {"Token": "2"}
                    }).success(function(data,status) {
                        console.log(data);
                    })
                    .error(function(data, status) {
                        console.log(data);
                    })
        });



