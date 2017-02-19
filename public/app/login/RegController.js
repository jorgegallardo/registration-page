angular.module('Registration')
.controller('RegController', ['$scope', 'Authentication', function($scope, Authentication) {
  $scope.message = 'REGISTER! DO IT!';

  $scope.register = function() {
    Authentication.register($scope.user);
    // $scope.message = message;
  };
}]);