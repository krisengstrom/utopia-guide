controllers.controller('MainController', ['$scope', '$document', '$location', function ($scope, $document, $location) {

	$scope.navStateOpen = false;

	$document.on('scroll', function() {
		$scope.setNavPosition();
	});

	$document.ready(function () {
		$scope.setNavPosition();
	});

	$scope.$on('$viewContentLoaded', function(){

		$scope.closeNav();

		$scope.queryStringParams = $location.search();

		if ($scope.queryStringParams.hasOwnProperty('section')) {
			var e = angular.element(document.getElementById('section-' + $scope.queryStringParams.section));
			$document.scrollToElementAnimated(e, 110);
		} else {
			$document.scrollTo('top');
		}

	});

	$scope.setNavPosition = function() {
		if ($document.scrollTop() >= 160) {
			$document.find('body').addClass('fixed-nav');
		} else {
			$document.find('body').removeClass('fixed-nav');
		}

		console.log($scope.queryStringParams);

		if ($scope.queryStringParams.hasOwnProperty('section')) {
			console.log($scope.queryStringParams.section);
			console.log('.section-' + $scope.queryStringParams.section);
			console.log(document.getElementById('section-' + $scope.queryStringParams.section));

		}
	}

	$scope.closeNav = function() {
		$scope.navStateOpen = false;
	}

	$scope.openNav = function() {
		$scope.navStateOpen = true;
	}


		
}]);