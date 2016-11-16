var app = angular.module('hotelApp');

	app.factory('Hotel', function() {
            var hotels = [
            { id: 342, name: 'Marijuana Legal', image: 'img/pier.jpg', rating: '8.5', price: '4349', stars: '3'
            },
            { id: 343, name: 'Hotel Sweet Hotel', image: 'img/car.jpg', rating: '8.3', price: '2329', stars: '3'
            },
            { id: 344, name: 'Our Own Hotel', image: 'img/glassHat.jpg', rating: '8.0', price: '1389', stars: '3'
            },
            { id: 345, name: 'Blackjack and Sluts', image: 'img/slippers.jpg', rating: '8.5', price: '4349', stars: '3'
            },
            { id: 346, name: 'Not The Best Hotel', image: 'img/slipperCoconut.jpg', rating: '8.3', price: '2329', stars: '3'
            },
            { id: 347, name: 'We Could Be Better', image: 'img/oceanPier.jpg', rating: '8.0', price: '1389', stars: '3'
            },
            { id: 348, name: 'Blackjack and Sluts', image: 'img/hammock.jpg', rating: '8.5', price: '4349', stars: '3'
            },
            { id: 349, name: 'Not The Best Hotel', image: 'img/maldives.jpg', rating: '8.3', price: '2329', stars: '3'
            },
            { id: 350, name: 'We Could Be Better', image: 'img/pretty.jpg', rating: '8.0', price: '1389', stars: '3'
            },
            { id: 351, name: 'Marijuana Legal', image: 'img/pier.jpg', rating: '8.5', price: '4349', stars: '3'
            },
            { id: 352, name: 'Hotel Sweet Hotel', image: 'img/car.jpg', rating: '8.3', price: '2329', stars: '3'
            },
            { id: 353, name: 'Our Own Hotel', image: 'img/glassHat.jpg', rating: '8.0', price: '1389', stars: '3'
            },
            { id: 354, name: 'Blackjack and Sluts', image: 'img/slippers.jpg', rating: '8.5', price: '4349', stars: '3'
            },
            { id: 355, name: 'Not The Best Hotel', image: 'img/slipperCoconut.jpg', rating: '8.3', price: '2329', stars: '3'
            },
            { id: 356, name: 'We Could Be Better', image: 'img/oceanPier.jpg', rating: '8.0', price: '1389', stars: '3'
            },
            { id: 357, name: 'Blackjack and Sluts', image: 'img/hammock.jpg', rating: '8.5', price: '4349', stars: '3'
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
                    return hotels;
                }
            };
        });


    app.factory('Review', function() {
            var reviews = [
            { body: 'hehe that was a great stay, enjoyed it waaay too much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            { body: 'it was crazy', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            { body: 'not much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            { body: 'hlol', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            { body: 'hehe that was a great stay, enjoyed it waaay too much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            { body: 'boooobooo', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            { body: 'hehe that was a great stay, enjoyed it waaay too much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            { body: 'hehe that was a great stay, enjoyed it waaay too much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            { body: 'hehe that was a great stay, enjoyed it waaay too much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            { body: 'waaay too drunk', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            { body: 'hehe that was a great stay, enjoyed it waaay too much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9',  valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
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
            {id: '54362342', arrival: '15-12-2016', departure: '17-12-2016', name: 'Angelina Jolie', email: 'angie@gmail.com', price: '8904', hotelName: 'Sweet Home Sweet', image: 'img/pretty.jpg', roomNum: 4},
            {id: '54362342', arrival: '12-12-2016', departure: '19-12-2016', name: 'Angelina Jolie', email: 'angie@gmail.com', price: '8904', hotelName: 'Sweet Home Sweet', image: 'img/pretty.jpg', roomNum: 5},
            {id: '54362342', arrival: '11-11-2016', departure: '10-12-2016', name: 'Angelina Jolie', email: 'angie@gmail.com', price: '8904', hotelName: 'Sweet Home Sweet', image: 'img/pretty.jpg', roomNum: 6},
            {id: '54362342', arrival: '31-12-2016', departure: '01-01-2017', name: 'Angelina Jolie', email: 'angie@gmail.com', price: '8904', hotelName: 'Sweet Home Sweet', image: 'img/pretty.jpg', roomNum: 7},
            {id: '54362342', arrival: '15-12-2016', departure: '17-12-2016', name: 'Angelina Jolie', email: 'angie@gmail.com', price: '8904', hotelName: 'Sweet Home Sweet', image: 'img/pretty.jpg', roomNum: 8},
            {id: '54362342', arrival: '15-12-2016', departure: '17-12-2016', name: 'Angelina Jolie', email: 'angie@gmail.com', price: '8904', hotelName: 'Sweet Home Sweet', image: 'img/pretty.jpg', roomNum: 9},
            {id: '54362342', arrival: '15-12-2016', departure: '17-12-2016', name: 'Angelina Jolie', email: 'angie@gmail.com', price: '8904', hotelName: 'Sweet Home Sweet', image: 'img/pretty.jpg', roomNum: 10},
            {id: '54362342', arrival: '15-12-2016', departure: '17-12-2016', name: 'Angelina Jolie', email: 'angie@gmail.com', price: '8904', hotelName: 'Sweet Home Sweet', image: 'img/pretty.jpg', roomNum: 11},
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

            var employees = [];
            for (var i = 0; i < 10; i++) {
                employees.push(user);
            };

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
                id: '54362342', arrival: '15-12-2016', departure: '17-12-2016', name: 'Angelina Jolie', email: 'angie@gmail.com', price: '8904', hotelName: 'Sweet Home Sweet', roomName: 'Economy Double', image: 'img/pretty.jpg'  
            };

            return {
                get: function() {
                    return reservation;
                }
            };
        });

        app.factory('Onehotel', function() {
            var onehotel = { 
                name: 'Marijuana Legal', image: 'img/pier.jpg', description: "This is the best hotel you will ever try to spend time at. It's fantastic and wonderful, ah! You'll greatly enjoy your time here, we guarantee you!", rating: 8.5, price: 4349, stars: 3
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
            {level: 'single', price: '1900', image: 'img/glassHat.jpg', roomNum: 7},
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

        app.factory('Role', function() {
            var roles = {
                isBoss: true,
                isManager: true,
                isReceptionist: true,
                isCleaner: true
            };

            return {
                getBoss: function() {
                    return roles.isBoss;
                },
                getManager: function() {
                    return roles.isManager;
                },
                getReceptionist: function() {
                    return roles.isReceptionist;
                },
                getCleaner: function() {
                    return roles.isCleaner;
                }
            };
        });




