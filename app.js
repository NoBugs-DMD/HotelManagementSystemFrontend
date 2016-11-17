var app = angular.module('hotelApp', []);
app.config(function($httpProvider){
	$httpProvider.defaults.withCredentials = true;
}); 
