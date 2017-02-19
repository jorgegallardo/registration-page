angular.module('Registration')
.factory('Authentication', ['$rootScope', '$location', '$firebaseAuth', '$firebaseObject', function($rootScope, $location, $firebaseAuth, $firebaseObject) {
  var ref = firebase.database().ref();
  var auth = $firebaseAuth();
  var myObject;

  auth.$onAuthStateChanged(function(authenticatedUser) {
    if(authenticatedUser) {
      var userReference = ref.child('users').child(authenticatedUser.uid);
      var userObject = $firebaseObject(userReference);
      $rootScope.currentUser = userObject;
    } else {
      $rootScope.currentUser = '';
    }
  });

  myObject = {
    login: function(user) {
      auth.$signInWithEmailAndPassword(user.email, user.password)
      .then(function(firebaseUser) {
        $location.path('/success');
      })
      .catch(function(error) {
        alert(error.message);
        user.email = '';
        user.password = '';
      });
    },
    logout: function() {
      return auth.$signOut();
    },
    requireAuth: function() {
      return auth.$requireSignIn();
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
        myObject.login(user);
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
  return myObject;
}]);