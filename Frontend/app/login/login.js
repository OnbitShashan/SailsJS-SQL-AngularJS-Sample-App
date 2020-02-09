(function() {
  'use strict';

angular.module('myApp')

.controller('LoginController', ['$scope', 'AuthService', '$location', LoginController]);
function LoginController($scope, AuthService, $location) {
    console.log("login controller");

    $scope.login = async function(user) {

        if(!user || !user.username || !user.password) return;
        console.log($scope.user)

        let login = await AuthService.login($scope.user);

        console.log(login);
        if(login.status === 200){
          localStorage.setItem('satellizer_token', login.data.token);
          localStorage.setItem('user', login.data.user);
          $location.path('/product');
          $scope.$apply();
          return;
        }else{
          return;
        }
    };
  }
})();