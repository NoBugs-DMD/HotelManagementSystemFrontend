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
            $scope.hotels = Hotel.getHotels(); //getting an array of hotels (description only)
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

        //checking roles
        app.controller("RoleCtrl", function($scope, Role) {
            $scope.boss = Role.getBoss();
            $scope.manager = Role.getManager();
            $scope.receptionist = Role.getReceptionist();
            $scope.cleaner = Role.getCleaner();
            console.log($scope.boss);
        });

