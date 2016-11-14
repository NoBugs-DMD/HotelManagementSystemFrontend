var app = angular.module('hotelApp');

	app.factory('Hotel', function() {
            var hotels = [
            { name: 'Marijuana Legal', image: 'img/pier.jpg', rating: '8.5', price: '4349', stars: '3'
            },
            { name: 'Hotel Sweet Hotel', image: 'img/car.jpg', rating: '8.3', price: '2329', stars: '3'
            },
            { name: 'Our Own Hotel', image: 'img/glassHat.jpg', rating: '8.0', price: '1389', stars: '3'
            },
            { name: 'Blackjack and Sluts', image: 'img/slippers.jpg', rating: '8.5', price: '4349', stars: '3'
            },
            { name: 'Not The Best Hotel', image: 'img/slipperCoconut.jpg', rating: '8.3', price: '2329', stars: '3'
            },
            { name: 'We Could Be Better', image: 'img/oceanPier.jpg', rating: '8.0', price: '1389', stars: '3'
            },
            { name: 'Blackjack and Sluts', image: 'img/hammock.jpg', rating: '8.5', price: '4349', stars: '3'
            },
            { name: 'Not The Best Hotel', image: 'img/maldives.jpg', rating: '8.3', price: '2329', stars: '3'
            },
            { name: 'We Could Be Better', image: 'img/pretty.jpg', rating: '8.0', price: '1389', stars: '3'
            },
            { name: 'Marijuana Legal', image: 'img/pier.jpg', rating: '8.5', price: '4349', stars: '3'
            },
            { name: 'Hotel Sweet Hotel', image: 'img/car.jpg', rating: '8.3', price: '2329', stars: '3'
            },
            { name: 'Our Own Hotel', image: 'img/glassHat.jpg', rating: '8.0', price: '1389', stars: '3'
            },
            { name: 'Blackjack and Sluts', image: 'img/slippers.jpg', rating: '8.5', price: '4349', stars: '3'
            },
            { name: 'Not The Best Hotel', image: 'img/slipperCoconut.jpg', rating: '8.3', price: '2329', stars: '3'
            },
            { name: 'We Could Be Better', image: 'img/oceanPier.jpg', rating: '8.0', price: '1389', stars: '3'
            },
            { name: 'Blackjack and Sluts', image: 'img/hammock.jpg', rating: '8.5', price: '4349', stars: '3'
            },
            { name: 'Not The Best Hotel', image: 'img/maldives.jpg', rating: '8.3', price: '2329', stars: '3'
            },
            { name: 'We Could Be Better', image: 'img/pretty.jpg', rating: '8.0', price: '1389', stars: '3'
            }
            ];

            return { 
                get: function(offset, limit) {     
                    return hotels.slice(offset, offset+limit); 
                }, 
                total: function() {     
                    return hotels.length; 
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
            {id: '54362342', arrival: '15-12-2016', departure: '17-12-2016', name: 'Angelina Jolie', email: 'angie@gmail.com', price: '8904', hotelName: 'Sweet Home Sweet', image: 'img/pretty.jpg'},
            {id: '54362342', arrival: '12-12-2016', departure: '19-12-2016', name: 'Angelina Jolie', email: 'angie@gmail.com', price: '8904', hotelName: 'Sweet Home Sweet', image: 'img/pretty.jpg'},
            {id: '54362342', arrival: '11-11-2016', departure: '10-12-2016', name: 'Angelina Jolie', email: 'angie@gmail.com', price: '8904', hotelName: 'Sweet Home Sweet', image: 'img/pretty.jpg'},
            {id: '54362342', arrival: '31-12-2016', departure: '01-01-2017', name: 'Angelina Jolie', email: 'angie@gmail.com', price: '8904', hotelName: 'Sweet Home Sweet', image: 'img/pretty.jpg'},
            {id: '54362342', arrival: '15-12-2016', departure: '17-12-2016', name: 'Angelina Jolie', email: 'angie@gmail.com', price: '8904', hotelName: 'Sweet Home Sweet', image: 'img/pretty.jpg'},
            {id: '54362342', arrival: '15-12-2016', departure: '17-12-2016', name: 'Angelina Jolie', email: 'angie@gmail.com', price: '8904', hotelName: 'Sweet Home Sweet', image: 'img/pretty.jpg'},
            {id: '54362342', arrival: '15-12-2016', departure: '17-12-2016', name: 'Angelina Jolie', email: 'angie@gmail.com', price: '8904', hotelName: 'Sweet Home Sweet', image: 'img/pretty.jpg'},
            {id: '54362342', arrival: '15-12-2016', departure: '17-12-2016', name: 'Angelina Jolie', email: 'angie@gmail.com', price: '8904', hotelName: 'Sweet Home Sweet', image: 'img/pretty.jpg'},
            ];

            return {
                get: function() {
                    return bookings;
                }
            };
        });

        app.factory('Room', function() {
            var rooms = [
            {level: 'economy', price: '890', image: 'img/pier.jpg'},
            {level: 'suite', price: '8905', image: 'img/pier.jpg'},
            {level: 'double', price: '5432', image: 'img/pier.jpg'},
            {level: 'single', price: '1900', image: 'img/pier.jpg'},
            {level: 'dorms', price: '890', image: 'img/pier.jpg'},
            ];

            return {
                get: function() {
                    return rooms;
                }
            };
        });


