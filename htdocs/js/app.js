'use strict';

var controllers = angular.module('guideControllers', []);
var app = angular.module('UtopiaGuide', ['duScroll', 'ngRoute', 'guideControllers']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/overview.html'
		})
		.when('/overview/', {
			templateUrl: 'views/overview.html'
		})
		.when('/quick-start/', {
			templateUrl: 'views/quick-start.html'
		})
		.when('/politics/', {
			templateUrl: 'views/politics.html'
		})
		.when('/growth/', {
			templateUrl: 'views/growth.html'
		})
		.when('/military/', {
			templateUrl: 'views/military.html'
		})
		.when('/thievery/', {
			templateUrl: 'views/thievery.html'
		})
		.when('/magic/', {
			templateUrl: 'views/magic.html'
		})
		.when('/science/', {
			templateUrl: 'views/science.html'
		})
		.when('/dragons-and-rituals/', {
			templateUrl: 'views/dragons.html'
		})
		.when('/account/', {
			templateUrl: 'views/account.html'
		})
		.when('/special-thanks/', {
			templateUrl: 'views/special-thanks.html'
		})
		.otherwise({
			redirectTo: '/404/'
		});

	$locationProvider.html5Mode(true);
}]);

// app.run(function($rootScope, $location, $anchorScroll) {
// 	//when the route is changed scroll to the proper element.
// 	$rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
// 		if($location.hash()) $anchorScroll();
// 	});
// });