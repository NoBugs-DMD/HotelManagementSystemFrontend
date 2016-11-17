var app = angular.module('hotelApp');

        app.controller("PaginationCtrl", function($scope, Hotel) {
            $scope.itemsPerPage = 9;
            $scope.currentPage = 0;
            $scope.total = Hotel.total();
            $scope.pagedHotels = Hotel.get($scope.currentPage * $scope.itemsPerPage, $scope.itemsPerPage);
            
            $scope.loadMore = function() {
            $scope.currentPage++;
            var newHotels = Hotel.get($scope.currentPage*$scope.itemsPerPage,$scope.itemsPerPage);
            $scope.pagedHotels = $scope.pagedHotels.concat(newHotels);
            };

            $scope.nextPageDisabledClass = function() {
            return $scope.currentPage === $scope.pageCount()-1 ? "disabled" : "";
            };

            $scope.pageCount = function() {
            return Math.ceil($scope.total/$scope.itemsPerPage);
            };
        });

        app.controller("PaginationCtrlReviews", function($scope, Review) {
            $scope.itemsPerPage = 5;
            $scope.currentPage = 0;
            $scope.total = Review.total();
            $scope.pagedReviews = Review.get($scope.currentPage * $scope.itemsPerPage, $scope.itemsPerPage);
            
            $scope.loadMore = function() {
            $scope.currentPage++;
            var newReviews = Review.get($scope.currentPage*$scope.itemsPerPage,$scope.itemsPerPage);
            $scope.pagedReviews = $scope.pagedReviews.concat(newReviews);
            };

            $scope.nextPageDisabledClass = function() {
            return $scope.currentPage === $scope.pageCount()-1 ? "disabled" : "";
            };

            $scope.pageCount = function() {
            return Math.ceil($scope.total/$scope.itemsPerPage);
            };
        });

        app.controller("HotelCtrl", function ($scope, Hotel) {
            console.log("hehe");
            $scope.hotels = Hotel.getHotels(); //getting an array of hotels for admin
        });

        app.controller("RolesCtrl", function($scope, Role) {
            $scope.roles = Role.get();
            console.log($scope.roles);
            //$scope.isManager = true;
            //$scope.isCleaner = $scope.roles.cleaner;
            //$scope.isOwner = $scope.roles.owner;
            //$scope.isReceptionist = $scope.roles.receptionist;

        });

        app.controller("UserCtrl", function ($scope, User) {
            $scope.user = User.get(); //getting the current user
        });

        app.controller("ReservationCtrl", function ($scope, Reservation) {
            $scope.reservation = Reservation.get(); //getting the current reservation
        });

        app.controller("CurrentHotelCtrl", function ($scope, Onehotel) {
            $scope.currentHotel = Onehotel.get(); //getting the current hotel
        });
        
        app.controller("RoomController", function($scope, Room) {
            $scope.rooms = Room.get(); //getting an array of rooms
        });

        app.controller("MyBookingsController", function($scope, Booking) {
           $scope.bookings = Booking.get(); //getting an array of bookings
        });

        app.controller("EmpsCtrl", function($scope, User) {
            $scope.employees = User.emps(); //getting an array of employees
        });

        app.controller("RoomLvlCtrl", function($scope, RoomLevel) {
           $scope.roomLevels = RoomLevel.get(); //getting an array of room levels
        });

        app.controller("ClientLvlCtrl", function($scope, ClientLevel) {
           $scope.clientLevels = ClientLevel.get(); //getting an array of client levels
        });

        app.controller("ShowCtrl", function($scope) {
            $scope.showMore = function(){
                $scope.shouldShow = !$scope.shouldShow; //toggling lists
            };
        });

        app.controller("ToDoCtrl", function($scope, ToDo) {
            $scope.todos = ToDo.get(); //getting an array of todos
            $scope.hideElement = function(){
                $scope.hidden = true;
            };
            $scope.changeClass = function(){
                $scope.newClass = "done"; 
            }
        });

        app.controller('HttpPostCtrl', function($scope, $http) {
    
        var api = "http://89.223.20.123:8080/api/";
    
        $scope.LogIn = function() {
            var data = {
                Login: $scope.login,
                PassHash: $scope.password
            };

            $http.post(api + "signin/", data)
                .success(function(data,status) {
                    console.log(data); 
                })
                .error(function(data, status) {
                    $scope.ResponseDetails = "Oops! Error."
                })
        };
            
            //sign up at index
            $scope.SignUp = function() {
                var data = {
                    Login: $scope.login,
                    Name: $scope.name,
                    Email: $scope.email,
                    PassHash: $scope.password
                };

                $http.post(api + "signup/", data)
                    .success(function(data,status) {
                        $scope.PostDataResponse = "You've signed up!";
                    })
                    .error(function(data, status) {
                        $scope.ResponseDetails = "Oops! Error."
                    })
            };

            //search hotel results from index to searchResults
            $scope.GetSearch = function() {
                var data = {
                    CityId: 0,
                    arrival_time: $scope.arrivalDate,
                    departure_time: $scope.departureDate
                };

                $http.post("http://89.223.20.123:8080/api/signup/", data)
                    .success(function(data, status) {
                        currentDataObj = data;
                        console.log("Time to Travel - Time Travel");
                    })
                    .error(function(data, status) {
                        console.log("Your search is invalid");
                    })
            };

            $scope.GetAllCities = function() {
                $http.get(api + "city/")
                    .success(function(data,status) {
                        console.log(data);
                    })
                    .error(function(data, status) {
                        console.log(data);
                    })
            };

            $scope.AddCity = function() {
                var data = {
                    Name: "foo" 
                };

                $http.put(api + "city/", data)
                    .success(function(data,status) {
                        console.log(data);
                    })
                    .error(function(data, status) {
                        console.log(data);
                    })
            };

            $scope.GetMyBookings = function() {
                var n = 5;
                var ofst = 0;

                $http.get(api + "account/bookings/" + n + "?offset=" + ofst)
                    .success(function(data,status) {
                        console.log(data);
                    })
                    .error(function(data, status) {
                        console.log(data);
                    })
            };

            $scope.GetMyInfo = function() {
                $http.get(api + "account/")
                    .success(function(data,status) {
                        console.log(data);
                    })
                    .error(function(data, status) {
                        console.log(data);
                    })
            };

            $scope.UpdateMyInfo = function() {
                // All fields are optional
                var data = {
                    NewName: "foo",
                    NewEmail: "foo",
                    OldPassHash: "foo",
                    NewPassHash: "foo"
                };

                $http.post(api + "account/", data)
                    .success(function(data,status) {
                        console.log(data);
                    })
                    .error(function(data, status) {
                        console.log(data);
                    })
            };

            $scope.GetBooking = function() {
                var id = 0;

                $http.get(api + "booking/" + id)
                    .success(function(data,status) {
                        console.log(data);
                    })
                    .error(function(data, status) {
                        console.log(data);
                    })
            };

            $scope.AddBooking = function() {
                var data = {
                    ClientPersonID: $scope.id,
                    HotelID: $scope.data.id,
                    RoomNumber: 0,
                    ArrivalTime: $scope.arrivalDate,
                    DepartureTime: $scope.departureDate
                };

                $http.put(api + "booking/", data)
                    .success(function(data,status) {
                        console.log(data);
                    })
                    .error(function(data, status) {
                        console.log(data);
                    })
            };

            $scope.GetHotels = function() {
                var n = 5;
                var ofst = 0;

                $http.get(api + "hotels/" + n + "?offset=" + ofst)
                    .success(function(data,status) {
                        console.log(data);
                    })
                    .error(function(data, status) {
                        console.log(data);
                    })
            };

            $scope.GetHotel = function(id) {

                $http.get(api + "hotel/" + id)
                    .success(function(data,status) {
                        console.log(data);
                    })
                    .error(function(data, status) {
                        console.log(data);
                    })
            };

            $scope.AddHotel = function() {
                var data = {
                    CityID: 0,
                    Name: "foo",
                    Description: "foo",
                    Stars: 5 
                };

                $http.put(api + "hotel/", data)
                    .success(function(data,status) {
                        console.log(data);
                    })
                    .error(function(data, status) {
                        console.log(data);
                    })
            };

            $scope.UpdateHotel = function() {
                var id = 0;

                // All fields are optional
                var data = {
                    RuleSetID: 0,
                    Name: "foo",
                    Description: "foo",
                    PhotoSetID: 0,
                    Stars: 5
                };

                $http.post(api + "hotel/" + id, data)
                    .success(function(data,status) {
                        console.log(data);
                    })
                    .error(function(data, status) {
                        console.log(data);
                    })
            };

            $scope.GetRooms = function(id) {
                var rooms = [];
                $http.get(api + "hotel/:" + id +"/rooms/:cnt") //?? what do you mean by count
                    .success(function(data, status) {
                        rooms = data;
                        console.log(data);
                    })
                    .error(function(data, status) {
                        console.log(data);
                    });

            };

        });







