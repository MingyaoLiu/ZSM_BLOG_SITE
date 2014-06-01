angular.module('BlogApp', ['ngRoute', 'ngAnimate', 'ngSanitize', 'route-segment', 'view-segment', 'MainTempConfig', 'MainTempCtrl'])
.value('loader', {show: false})




function Section1Ctrl($scope, $rootScope, $routeSegment) {
    $scope.$watch('form', function(newVal, oldVal){
    console.log('changed');
}, true);
    $rootScope.pageClass = 'page-home';
    $scope.$routeSegment = $routeSegment;
    $scope.test = { btnClicked: false };
    $scope.items = [ 1,2,3,4,5 ];

}

function Section1ItemCtrl($scope, $rootScope, $routeSegment) {
$rootScope.pageClass = 'page-home';
    $scope.$routeSegment = $routeSegment;
    $scope.item = { id: $routeSegment.$routeParams.id };
    $scope.test = { textValue: '' };
}

function Section2Ctrl($scope, $rootScope, $routeSegment) {
$rootScope.pageClass = 'page-home';
    $scope.$routeSegment = $routeSegment;
    $scope.test = { textValue: '' };
    $scope.items = [ 1,2,3,4,5,6,7,8,9 ];
}

function ErrorCtrl($scope, error) {
    $scope.error = error;
}

function SlowDataCtrl($scope, data, loader) {
    loader.show = false;
    $scope.data = data;
}


