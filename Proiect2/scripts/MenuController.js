/**
 * Created by Andrei on 12/05/2015.
 */
hrApp.controller('MenuController',['$scope','$rootScope',function($scope,$rootScope) {
    $scope.demoActionList=[
    {
        label:"OtherScope",
        url:"views/childscope.html"
    },
    {
        label:"DemoMath",
        url:"views/demomath.html"
    }
    ];
}]);