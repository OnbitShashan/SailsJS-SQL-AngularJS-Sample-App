(function() {
    'use strict';
  
  
  angular.module('myApp')
  
  .controller('EditProductController', ['ProductService','$scope', '$routeParams',EditProductController]);
    function EditProductController(ProductService, $scope, $routeParams) {
    
      $scope.getProductById = async function(productId) {
  
        let response = await ProductService.getProductById(productId);
  
        if(response.status === 200){
          $scope.product = response.data;
          console.log($scope.product);
          $scope.$apply();
        }
      };
  
      $scope.getProductById($routeParams.id);
      
    }
  })();