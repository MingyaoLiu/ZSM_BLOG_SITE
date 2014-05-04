
function BlogCtrl($scope, $routeSegment, $http) {
	$scope.$routeSegment = $routeSegment;
	$http({method: 'GET', url: '/api/firstblog'}).success(function(data) {
		$scope.firstblogs = data;
	});
}

