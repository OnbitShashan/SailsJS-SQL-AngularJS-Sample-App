/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    //produt
    'GET /product/:productId': 'ProductController.getProductById',
    'PUT /product/:productId': 'ProductController.updateProductById',
    'DELETE /product/:productId': 'ProductController.deleteProductById',
    'POST /product/add': 'ProductController.createProduct',
    'GET /product/all': 'ProductController.getAllProducts',
    'GET /product/getAllCategoriesAndMerchants': 'ProductController.getAllCategoriesAndMerchants',

    //user 
    'POST /user/login': 'AuthController.login'
};
