hrApp.controller('DescriptionController',['$scope','$rootScope',function($scope,$rootScope) {

//    $scope.title = 'Two Way Binding Demo';
//    console.log("Description controller was initialised");
//    $scope.myVal="MyVal Description Controller";
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function() {
    $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
    $scope.firstVariable = val;
    };

    $scope.toggleDescriptionShow=function(){

       if($scope.descriptionShow==true)
            $scope.descriptionShow=false;
       else
            $scope.descriptionShow=true;


    }

}]);