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
	});



