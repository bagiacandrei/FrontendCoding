/**
 * Created by Andrei on 12/05/2015.
 */

hrApp.controller('MathController',['$scope','$rootScope',function($scope,$rootScope) {

    $scope.oper=function() {
        $scope.addition = $scope.nra + $scope.nrb;
        $scope.substractionsubstraction = $scope.nra - $scope.nrb;
        $scope.multiplication= $scope.nra * $scope.nrb;
        $scope.division = $scope.nra / $scope.nrb;
    }
}]);