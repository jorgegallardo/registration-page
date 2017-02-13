angular.module('Registration')
.factory('Authentication', ['$rootScope', '$firebaseAuth', function($rootScope, $firebaseAuth) {
  //var ref = firebase.database().ref();
  var auth = $firebaseAuth();

  return {
    login: function(user) {
      $rootScope.message = "Welcome " + user.email;
    },
    register: function(user) {
      auth.$createUserWithEmailAndPassword(user.email, user.password)
      .then(function(regUser) {
        user.email = '';
        user.password = '';
        user.confirmPassword = '';
        // $scope.message = 'Thanks for registering with the email: ' + user.email;
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
    }
  };
}]);