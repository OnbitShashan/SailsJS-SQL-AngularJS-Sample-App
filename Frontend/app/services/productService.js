/**
 * Created by Sudarshana on 10/10/19.
 * @description DataService is responsible for sharing data between Controllers.
 **/
(function () {
    'use strict'
    angular.module('myApp').service('ProductService', ['SERVER_URL', '$http', ProductService]);

    function ProductService(SERVER_URL, $http) {
        return {
            getAllProducts: function(){
                return $http.get(`${SERVER_URL}/product/all`);
            },

            createProduct: function(data){
                return $http.post(`${SERVER_URL}/product/add`, data);
            },

            deleteProductById: function(productId){
                return $http.delete(`${SERVER_URL}/product/${productId}`);
            },

            updateProductById: function(productId, data){
                return $http.put(`${SERVER_URL}/product/${productId}`, data);
            },

            getProductById: function(productId){
                return $http.get(`${SERVER_URL}/product/${productId}`);
            },
            getAllCategoriesAndMerchants: function(){
                return $http.get(`${SERVER_URL}/product/getAllCategoriesAndMerchants`);
            }

        }
    }
})();