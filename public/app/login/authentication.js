angular.module('Registration')
.factory('Authentication', ['$rootScope', '$firebaseAuth', function($rootScope, $firebaseAuth) {
  var ref = firebase.database().ref();
  var auth = $firebaseAuth();

  return {
    login: function(user) {
      $rootScope.message = "Welcome " + user.email;
    },
    register: function(user) {
      auth.$createUserWithEmailAndPassword(user.email, user.password)
      .then(function(firebaseUser) {
        var regRef = ref.child('users').child(firebaseUser.uid).set({
          date: firebase.database.ServerValue.TIMESTAMP,
          registeredUser: firebaseUser.uid,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        });
        // var message = firebaseUser.uid;
        user.firstName = '';
        user.lastName = '';
        user.email = '';
        user.password = '';
        user.confirmPassword = '';
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