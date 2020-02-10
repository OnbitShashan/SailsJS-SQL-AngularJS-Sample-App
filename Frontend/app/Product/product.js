(function() {
  'use strict';

angular.module('myApp')

.controller('ProductController', ['ProductService','$scope', '$location',ProductController]);
  function ProductController(ProductService, $scope, $location) {

    $scope.getAllProducts = async function() {

      let response = await ProductService.getAllProducts();

      if(response.status === 200){
        $scope.products = response.data;
        // console.log($scope.products);
        $scope.$apply();
      }
    };
    $scope.getAllProducts();

    $scope.editProduct = function(id){
      $location.path(`/product/${id}`);
    }

    $scope.logout = function(){
      localStorage.removeItem('bearer_token');
      localStorage.removeItem('user');
      $location.path(`/`);
    };

    $scope.createNewProduct = function(){
      $location.path(`/product/create`);
    };

    $scope.deleteProductModal = function(productId){
      $scope.deletingProdutId = productId;
      $('#deleteModal').modal('show');
    }

    $scope.deleteProduct = async function(){
      let response = await ProductService.deleteProductById($scope.deletingProdutId);
      $('#deleteModal').modal('hide');
      if(response.status === 200){
        $scope.deletedProduct = response.data;
        // console.log($scope.deletedProduct);
        $scope.products.map((e, index) =>{
          if(e.id === $scope.deletedProduct.id){
            $scope.products.splice(index,1);
          }
        });
        $scope.$apply();
      }
    }
  }
})();