angular.module('Registration')
.controller('LoginController', ['$scope', 'Authentication', function($scope, Authentication) {
  $scope.message = 'Log in below!';

  $scope.login = function() {
    Authentication.login($scope.user);
  };
  $scope.logout = function() {
    Authentication.logout();
  };
}]);