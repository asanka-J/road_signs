angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/gucaptione/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('page2Ctrl',['$scope', '$stateParams','$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/gucaptione/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseArray) {

var ref = new Firebase('https://roadsigns-87517.firebaseio.com/');
    var ref1 = new Firebase('https://roadsigns-87517.firebaseio.com/2');

    $scope.signs = $firebaseArray(ref);
  
      
    $scope.pageSigns = $firebaseArray(ref1); 


//     $scope.images = [];

//     $scope.loadImages = function() {
//        // for(var i = 0; i < 1; i++) {
// //             $scope.images.push({caption: "නවතිනු", src: "img/9hIzcbRR1MDxwdUJIiwA_1.PNG"});
//             $scope.images.push({caption: "ඉදිරියට එන්න", src: "img/w0bXAea4SN2GLGR3zzFM_2.PNG"});
//             $scope.images.push({caption: "ඉදිරියෙන් සහ පිටිපසින් එන වාහන නතර වෙනූ", src: "img/sKtF1bLRqqmkNKYCzuoA_3.PNG"});
//             $scope.images.push({caption: "ඉදිරියට එන්න", src: "img/tWk45cj6R4CaLij8BMJC_5.PNG"});
//             $scope.images.push({caption: "පිටිපසින් එන වාහන නතර වෙනූ", src: "img/BvKKBp6Sbe1LLkmgz5Rn_6.PNG"});
//         //}
//     }

//   $scope.photoBrowser = photoBrowser;

//   function photoBrowser(index){
//     photoBrowserStandalone(index, $scope.images)
//   }

//   function photoBrowserStandalone(index, images){

//     var new_images = [];
//     for(var i=0;i<images.length;i++){
//         new_images.push({
//             caption: images[i].caption,
//             url:images[i].src
//         });
//     }
    
//     var myApp = new Framework7();
//     var myPhotoBrowserStandalone = myApp.photoBrowser({
//         type: 'standalone',
//         theme: 'light',
//         photos : new_images,
//         initialSlide: index,
//         onClose: function(){
//           myApp = undefined;
//         }
//     });
//     myPhotoBrowserStandalone.open();
//   }


}])

   
.controller('page3Ctrl', ['$scope', '$stateParams','$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/gucaptione/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseArray) {

var ref = new Firebase('https://roadsigns-87517.firebaseio.com/');
    var ref1 = new Firebase('https://roadsigns-87517.firebaseio.com/3');

    $scope.signs = $firebaseArray(ref);
  
      
    $scope.pageSigns = $firebaseArray(ref1); 


}])
   
.controller('page4Ctrl',['$scope', '$stateParams','$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/gucaptione/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseArray) {

var ref = new Firebase('https://roadsigns-87517.firebaseio.com/');
    var ref1 = new Firebase('https://roadsigns-87517.firebaseio.com/4');

    $scope.signs = $firebaseArray(ref);
  
      
    $scope.pageSigns = $firebaseArray(ref1); 


}])
   

.controller('page5Ctrl', ['$scope', '$stateParams','$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/gucaptione/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseArray) {

var ref = new Firebase('https://roadsigns-87517.firebaseio.com/');
    var ref1 = new Firebase('https://roadsigns-87517.firebaseio.com/5');

    $scope.signs = $firebaseArray(ref);
  
      
    $scope.pageSigns = $firebaseArray(ref1); 



}])




// .controller("ExampleController", function($scope, $timeout, $ionicPopup,$firebaseArray) {



//      $scope.images = [];

//     $scope.loadImages = function() {
//         for(var i = 0; i < 1; i++) {
//             $scope.images.push({caption: "first", src:  "http://cf.mp-cdn.net/37/1a/7056657a120d473a051831e0a8ac-sometimes-yes-sometimes-no.png"});
//             $scope.images.push({caption: "second", src: "http://cf.mp-cdn.net/37/1a/7056657a120d473a051831e0a8ac-sometimes-yes-sometimes-no.png"});
//             $scope.images.push({caption: "third", src: "http://www.minoguesbeverage.com/wp-content/uploads/2013/10/Hobgoblin-100x100.jpg"});
//             $scope.images.push({caption: "4th", src: "http://www.minoguesbeverage.com/wp-content/uploads/2015/01/download-100x100.jpg"});
//             $scope.images.push({caption: "5th", src: "http://www.minoguesbeverage.com/wp-content/uploads/2015/01/download-100x100.jpg"});
//         }
//     }

//       $scope.photoBrowser = photoBrowser;

//   function photoBrowser(index){
//     photoBrowserStandalone(index, $scope.images)
//   }

//   function photoBrowserStandalone(index, images){
    
//     var myApp = new Framework7({
//         init: false, //IMPORTANT - just do it, will write about why it needs to false later
//     });
//     var myPhotoBrowserStandalone = myApp.photoBrowser({
//         type: 'standalone',
//         theme: 'light',
//         photos : images,
//         initialSlide: index,
//         onClose: function(){
//           myApp = undefined;
//         }
//     });
//     myPhotoBrowserStandalone.open();
//   }
// })
   

.controller('page6Ctrl',['$scope', '$stateParams','$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/gucaptione/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseArray) {

var ref = new Firebase('https://roadsigns-87517.firebaseio.com/');
    var ref1 = new Firebase('https://roadsigns-87517.firebaseio.com/6');

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



