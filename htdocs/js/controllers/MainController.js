controllers.controller('MainController', ['$scope', '$document', function ($scope, $document) {

	$scope.navStateOpen = false;

	$document.on('scroll', function() {
		$scope.setNavPosition();
	});

	$document.ready(function () {
		$scope.setNavPosition();
	});

	$scope.$on('$viewContentLoaded', function(){
		$scope.scrollTo('top');
	});

	$scope.scrollTo = function(id, callback) {
		var rect = document.getElementById(id).getBoundingClientRect();
		$document.scrollTop(rect.y, 500).then(function() {
			if (typeof callback == 'function') {
				callback();
			}
		});
	}

	$scope.setNavPosition = function() {
		if ($document.scrollTop() >= 160) {
			$document.find('body').addClass('fixed-nav');
		} else {
			$document.find('body').removeClass('fixed-nav');
		}
	}

	$scope.closeNav = function() {
		$scope.navStateOpen = false;
	}

	$scope.openNav = function() {
		$scope.navStateOpen = true;
	}


		
}]);