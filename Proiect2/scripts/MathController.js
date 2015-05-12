/**
 * Created by Andrei on 12/05/2015.
 */

hrApp.controller('MathController',['$scope','$rootScope',function($scope,$rootScope) {

    $scope.oper=function() {
        $scope.addition = $scop.nra + $scop.nrb;
        alert("sdsd");
        $scope.substraction = $scop.nra - $scop.nrb;
        $scope.multiplication= $scop.nra * $scop.nrb;
        $scope.division = $scop.nra / $scop.nrb;
    }
}]);