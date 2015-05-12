/**
 * Created by Andrei on 12/05/2015.
 */
hrApp.controller('OtherController',['$scope','$rootScope',function($scope,$rootScope) {
    $scope.setTitle=function() {
        $scope.title = "This is another title";
        console.log($scope);
    }
}]);
