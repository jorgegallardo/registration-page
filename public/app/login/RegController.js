angular.module('Registration')
.controller('RegController', ['$scope','$firebaseAuth', function($scope, $firebaseAuth) {
  //var ref = firebase.database().ref();
  var auth = $firebaseAuth();
  $scope.message = 'REGISTER! DO IT!';

  $scope.register = function() {
    auth.$createUserWithEmailAndPassword($scope.user.email, $scope.user.password)
    .then(function(regUser) {
      var user = firebase.auth().currentUser;
      $scope.user.email = '';
      $scope.user.password = '';
      $scope.user.confirmPassword = '';
      $scope.message = 'Thanks for registering with the email: ' + $scope.user.email;
      alert('Registration Successful.');
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  };
}]);