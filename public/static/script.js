	var quotoApp = angular.module('quotoApp', ['ngRoute']);

	quotoApp.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'home.html',
				controller  : 'mainController'
			})
			.when('/about', {
				templateUrl : 'about.html',
				controller  : 'aboutController'
			})
			.when('/contact', {
				templateUrl : 'search-quotes.html',
				controller  : 'searchController'
			});
	});

	// create the controller and inject Angular's $scope
	quotoApp.controller('mainController', function($scope) {
		$scope.message = 'Welcome!';
	});

	quotoApp.controller('aboutController', function($scope) {
		$scope.message = 'About Us';
	});

	quotoApp.controller('searchController', function($scope) {
		$scope.message = 'Search for...';
		var mysql = require('mysql'),
			client = mysql.createClient({
				user:'quoto',
				password:'password1'
			});

			mysql.query('SELECT * from quotes', function (err, results, fields){
				console.log(results);
				client.end();
			});
	});





