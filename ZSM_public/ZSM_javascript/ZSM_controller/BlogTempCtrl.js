
function BlogCtrl($scope, $routeSegment, $http) {
    $scope.$routeSegment = $routeSegment;
    jQuery('body').animate(
        {scrollTop: jQuery('.temp-navbar').offset().top}, 100 );
    function getPhonelist($scope, $http) {
		$http({method: 'GET', url: '/phonelist'})
		.success(function(data) {
			$scope.phones = data;
		});
	}
}

