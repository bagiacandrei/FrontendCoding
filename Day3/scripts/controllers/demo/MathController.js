hrApp.controller('MathController', ['$scope','MathService', function($scope,MathService){
    
    $scope.calculate = function() {
//////        TODO #8 calculate op1, op2, op3, op4
////            $scope.op1 = $scope.nra + $scope.nrb;
////            $scope.op2 = $scope.nra - $scope.nrb;
////            $scope.op3= $scope.nra * $scope.nrb;
////            $scope.op4 = $scope.nra / $scope.nrb;
//////        TODO #13 refactor your calculations using MathService
             $scope.op1=MathService.add($scope.nra,$scope.nrb)
        $scope.op2=MathService.substract($scope.nra,$scope.nrb)
        $scope.op3=MathService.multiply($scope.nra,$scope.nrb)
        $scope.op4=MathService.divide($scope.nra,$scope.nrb)

    }

}]);
