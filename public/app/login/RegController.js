angular.module('Registration')
.controller('RegController', ['$scope', 'Authentication', function($scope, Authentication) {
  $scope.message = 'REGISTER! DO IT!';

  $scope.login = function() {
    Authentication.login($scope.user);
  };

  $scope.register = function() {
    Authentication.register($scope.user);
  };
}]);