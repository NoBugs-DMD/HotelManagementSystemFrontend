var app = angular.module('hotelApp');
	
    app.factory('Hotel', function() {

            var hotels = data;

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
            var reviews = data;

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
            var bookings = data;

            return {
                get: function() {
                    return bookings;
                }
            };
        });

        app.factory('User', function() {
            var user = data;
            var employees = [];

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
            var reservation = data;

            return {
                get: function() {
                    return reservation;
                }
            };
        });

        app.factory('Onehotel', function() {
            var onehotel = data;

            return {
                get: function() {
                    return onehotel;
                }
            };
        });

        app.factory('Room', function() {
            var rooms = data;
            return {
                get: function() {
                    return rooms;
                }
            };
        });

        app.factory('RoomLevel', function() {
            var levels = data;

            return {
                get: function() {
                    return levels;
                }
            };
        });

        app.factory('ClientLevel', function() {
            var levels = data;

            return {
                get: function() {
                    return levels;
                }
            };
        });

        app.factory('ToDo', function() {
            var todos = data;
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



