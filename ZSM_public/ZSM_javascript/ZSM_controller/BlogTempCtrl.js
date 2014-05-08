
function BlogCtrl($scope, $rootScope, $routeSegment, $http) {
	$rootScope.pageClass = 'page-home';
	$scope.$routeSegment = $routeSegment;
	$http({method: 'GET', url: '/api/blogdescription'}).success(function(data) {
		$scope.blogdescriptions = data;
	});
	
}

