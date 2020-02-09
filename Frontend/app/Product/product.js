(function() {
  'use strict';


angular.module('myApp')

.controller('ProductController', ['ProductService','$scope', '$location',ProductController]);
  function ProductController(ProductService, $scope, $location) {

    $scope.getAllProducts = async function() {

      let response = await ProductService.getAllProducts();

      if(response.status === 200){
        $scope.products = response.data;
        console.log($scope.products);
        $scope.$apply();
      }
    };
    $scope.getAllProducts();

    $scope.editProduct = function(id){
      $location.path(`/product/${id}`);
    }
  }
})();