hrApp.controller('MainController',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){
    console.log('Hello world');
    $scope.name="Valoarea din scope";
    $scope.otherName="Alta Valoarea din scope";

//    $timeout(function(){
//        console.log($scope.name);
//        console.log($rootScope.name);
//    },10000);
    $scope.carList=[
        {
            type:'masina',
            model:'VW Golf'
        },
        {
            type:'car',
            model:'Ferrari'
        }
        ];
}]);