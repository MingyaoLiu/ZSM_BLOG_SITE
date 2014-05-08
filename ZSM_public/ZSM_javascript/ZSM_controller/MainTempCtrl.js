angular.module('MainTempCtrl', []);


function MainCtrl($scope, $routeSegment, loader) {
	$scope.$routeSegment = $routeSegment;
	$scope.loader = loader;
	$scope.$on('routeSegmentChange', function() {
		loader.show = false;
	});
	jQuery( ".temp-main div" ).removeClass( "firsttime" );
	
}