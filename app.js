var app = angular.module('hotelApp', []);
        
        //creating hotel info
        app.factory('Hotel', function() {
            var hotels = [
            {
                name: 'Marijuana Legal',
                image: 'bower_components/img/pier.jpg',
                rating: '8.5',
                price: '4349',
                stars: '3'
            },
            {
                name: 'Hotel Sweet Hotel',
                image: 'bower_components/img/car.jpg',
                rating: '8.3',
                price: '2329',
                stars: '3'
            },
            {
                name: 'Our Own Hotel',
                image: 'bower_components/img/glassHat.jpg',
                rating: '8.0',
                price: '1389',
                stars: '3'
            },
            {
                name: 'Blackjack and Sluts',
                image: 'bower_components/img/slippers.jpg',
                rating: '8.5',
                price: '4349',
                stars: '3'
            },
            {
                name: 'Not The Best Hotel',
                image: 'bower_components/img/slipperCoconut.jpg',
                rating: '8.3',
                price: '2329',
                stars: '3'
            },
            {
                name: 'We Could Be Better',
                image: 'bower_components/img/oceanPier.jpg',
                rating: '8.0',
                price: '1389',
                stars: '3'
            },
            {
                name: 'Blackjack and Sluts',
                image: 'bower_components/img/hammock.jpg',
                rating: '8.5',
                price: '4349',
                stars: '3'
            },
            {
                name: 'Not The Best Hotel',
                image: 'bower_components/img/maldives.jpg',
                rating: '8.3',
                price: '2329',
                stars: '3'
            },
            {
                name: 'We Could Be Better',
                image: 'bower_components/img/pretty.jpg',
                rating: '8.0',
                price: '1389',
                stars: '3'
            },
            {
                name: 'Marijuana Legal',
                image: 'bower_components/img/pier.jpg',
                rating: '8.5',
                price: '4349',
                stars: '3'
            },
            {
                name: 'Hotel Sweet Hotel',
                image: 'bower_components/img/car.jpg',
                rating: '8.3',
                price: '2329',
                stars: '3'
            },
            {
                name: 'Our Own Hotel',
                image: 'bower_components/img/glassHat.jpg',
                rating: '8.0',
                price: '1389',
                stars: '3'
            },
            {
                name: 'Blackjack and Sluts',
                image: 'bower_components/img/slippers.jpg',
                rating: '8.5',
                price: '4349',
                stars: '3'
            },
            {
                name: 'Not The Best Hotel',
                image: 'bower_components/img/slipperCoconut.jpg',
                rating: '8.3',
                price: '2329',
                stars: '3'
            },
            {
                name: 'We Could Be Better',
                image: 'bower_components/img/oceanPier.jpg',
                rating: '8.0',
                price: '1389',
                stars: '3'
            },
            {
                name: 'Blackjack and Sluts',
                image: 'bower_components/img/hammock.jpg',
                rating: '8.5',
                price: '4349',
                stars: '3'
            },
            {
                name: 'Not The Best Hotel',
                image: 'bower_components/img/maldives.jpg',
                rating: '8.3',
                price: '2329',
                stars: '3'
            },
            {
                name: 'We Could Be Better',
                image: 'bower_components/img/pretty.jpg',
                rating: '8.0',
                price: '1389',
                stars: '3'
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
        
        app.factory('Review', function() {
            var reviews = [
            {
                body: 'hehe that was a great stay, enjoyed it waaay too much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9', 
                valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            {
                body: 'it was crazy', locationRate: '6', cleanlinessRate: '8', serviceRate: '9', 
                valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            {
                body: 'not much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9', 
                valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            {
                body: 'hlol', locationRate: '6', cleanlinessRate: '8', serviceRate: '9', 
                valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            {
                body: 'hehe that was a great stay, enjoyed it waaay too much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9', 
                valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            {
                body: 'boooobooo', locationRate: '6', cleanlinessRate: '8', serviceRate: '9', 
                valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            {
                body: 'hehe that was a great stay, enjoyed it waaay too much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9', 
                valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            {
                body: 'hehe that was a great stay, enjoyed it waaay too much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9', 
                valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            {
                body: 'hehe that was a great stay, enjoyed it waaay too much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9', 
                valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            {
                body: 'waaay too drunk', locationRate: '6', cleanlinessRate: '8', serviceRate: '9', 
                valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
            },
            {
                body: 'hehe that was a great stay, enjoyed it waaay too much', locationRate: '6', cleanlinessRate: '8', serviceRate: '9', 
                valueForMoney: '7', overallRating: '8.2', name: 'Anna Wintour'
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

        app.controller("PaginationCtrlReviews", function($scope, Review) {
            $scope.itemsPerPage = 3;
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

