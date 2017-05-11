angular.module('app.controllers', [])
  
.controller('pageCtrl',['$scope', '$stateParams','$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/gucaptione/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseArray)  {


var ref = new Firebase('https://roadsigns-87517.firebaseio.com/');
    var ref1 = new Firebase('https://roadsigns-87517.firebaseio.com/2');

    $scope.signs = $firebaseArray(ref);
  
      
    $scope.pageSigns = $firebaseArray(ref1);

    
    $scope.clear = function() {
  
$scope.search="";

    } 

}])
   
.controller('page2Ctrl',['$scope', '$stateParams','$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/gucaptione/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseArray) {

var ref = new Firebase('https://roadsigns-87517.firebaseio.com/');
    var ref1 = new Firebase('https://roadsigns-87517.firebaseio.com/1');

    //$scope.signs = $firebaseArray(ref);
  
      
    $scope.pageSigns = $firebaseArray(ref1); 
    console.log($scope.pageSigns);




}])

   
.controller('page3Ctrl', ['$scope', '$stateParams','$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/gucaptione/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseArray) {

var ref = new Firebase('https://roadsigns-87517.firebaseio.com/');
    var ref1 = new Firebase('https://roadsigns-87517.firebaseio.com/2');

    $scope.signs = $firebaseArray(ref);
  
      
    $scope.pageSigns = $firebaseArray(ref1); 


}])
   
.controller('page4Ctrl',['$scope', '$stateParams','$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/gucaptione/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseArray) {

var ref = new Firebase('https://roadsigns-87517.firebaseio.com/');
    var ref1 = new Firebase('https://roadsigns-87517.firebaseio.com/3');

    $scope.signs = $firebaseArray(ref);
  
      
    $scope.pageSigns = $firebaseArray(ref1); 


}])
   

.controller('page5Ctrl', ['$scope', '$stateParams','$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/gucaptione/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseArray) {

var ref = new Firebase('https://roadsigns-87517.firebaseio.com/');
    var ref1 = new Firebase('https://roadsigns-87517.firebaseio.com/4');

    $scope.signs = $firebaseArray(ref);
  
      
    $scope.pageSigns = $firebaseArray(ref1); 



}])





   

.controller('page6Ctrl',['$scope', '$stateParams','$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/gucaptione/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseArray) {

var ref = new Firebase('https://roadsigns-87517.firebaseio.com/');
    var ref1 = new Firebase('https://roadsigns-87517.firebaseio.com/5');

    $scope.signs = $firebaseArray(ref);
  
      
    $scope.pageSigns = $firebaseArray(ref1); 


}])
   
.controller('page7Ctrl',['$scope', '$stateParams','$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/gucaptione/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseArray) {

var ref = new Firebase('https://roadsigns-87517.firebaseio.com/');
    var ref1 = new Firebase('https://roadsigns-87517.firebaseio.com/7');

    $scope.signs = $firebaseArray(ref);
  
      
    $scope.pageSigns = $firebaseArray(ref1); 


}])
   
.controller('page8Ctrl',['$scope', '$stateParams','$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/gucaptione/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseArray) {

var ref = new Firebase('https://roadsigns-87517.firebaseio.com/');
    var ref1 = new Firebase('https://roadsigns-87517.firebaseio.com/8');

    $scope.signs = $firebaseArray(ref);
  
      
    $scope.pageSigns = $firebaseArray(ref1); 


}])
   
.controller('page9Ctrl',['$scope', '$stateParams','$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/gucaptione/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseArray) {

var ref = new Firebase('https://roadsigns-87517.firebaseio.com/');
    var ref1 = new Firebase('https://roadsigns-87517.firebaseio.com/9');

    $scope.signs = $firebaseArray(ref);
  
      
    $scope.pageSigns = $firebaseArray(ref1); 


}])
   
.controller('page10Ctrl', ['$scope', '$stateParams','$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/gucaptione/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseArray) {

var ref = new Firebase('https://roadsigns-87517.firebaseio.com/');
    var ref1 = new Firebase('https://roadsigns-87517.firebaseio.com/10');

    $scope.signs = $firebaseArray(ref);
  
      
    $scope.pageSigns = $firebaseArray(ref1); 


}])



