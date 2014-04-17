angular.module('MainTempCtrl', []).controller('MainCtrl', function($scope, $routeSegment, loader) {

	$scope.$routeSegment = $routeSegment;
    $scope.loader = loader;

    $scope.$on('routeSegmentChange', function() {
        loader.show = false;
    })
});