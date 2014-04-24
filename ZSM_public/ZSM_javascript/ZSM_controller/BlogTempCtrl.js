
function BlogCtrl($scope, $routeSegment, $http) {
    $scope.$routeSegment = $routeSegment;
    jQuery('body').animate(
        {scrollTop: jQuery('.temp-navbar').offset().top}, 100 );
    $http({method: 'GET', url: 'phone.json'})
		.success(function(data) {
			$scope.phones = data;
		})
}

