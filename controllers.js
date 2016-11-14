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

        app.controller("UserCtrl", function ($scope, User) {
            $scope.user = User.get();
        });

        app.controller("ReservationCtrl", function ($scope, Reservation) {
            $scope.reservation = Reservation.get();
        });

        app.controller("CurrentHotelCtrl", function ($scope, Onehotel) {
            $scope.currentHotel = Onehotel.get();
        });
        
        app.controller("RoomController", function($scope, Room) {
            $scope.rooms = Room.get();
        });

        app.controller("MyBookingsController", function ($scope, Booking) {
           $scope.bookings = Booking.get(); 
        });


