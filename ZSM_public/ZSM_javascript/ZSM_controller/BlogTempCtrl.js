
function BlogCtrl($scope, $routeSegment, $http) {
	$scope.$routeSegment = $routeSegment;
	$http({method: 'GET', url: '/api/blogdescription'}).success(function(data) {
		$scope.blogdescriptions = data;
	});
}

