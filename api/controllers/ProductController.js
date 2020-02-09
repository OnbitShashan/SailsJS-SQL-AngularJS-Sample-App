/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    getAllProducts: async function(req, res){

        var products;
        try {
            products = await Product.find();
        } catch (err) {
            switch (err.name) {
                case 'UsageError': return res.badRequest(err);
                default: throw err;
            }
        }

        if (products.length > 0) {
            sails.log.info(`Found products count ${products.length}.`);
        } else {
            sails.log.info(`The database does not have any products`);
        }

        return res.json(products);
    },

    getProductById: async function(req, res){

        var product;
        try {
            product = await Product.findOne({
                id: req.param('productId')
            });
        } catch (err) {
            switch (err.name) {
                case 'UsageError': return res.badRequest(err);
                default: throw err;
            }
        }

        if (product) {
            sails.log.info(`Found product with id ${req.param('productId')}.`);
        } else {
            sails.log.info(`The database does not have a product with id ${req.param('productId')}.`);
        }

        return res.json(product);
    },

    editProductById: async function(req, res){
    
        var updatedProduct;
        try {
            updatedProduct = await Product.updateOne({id:req.param('productId')}).set(req.body);
        } catch (err) {
            switch (err.name) {
                case 'UsageError': return res.badRequest(err);
                default: throw err;
            }
        }
        if (updatedProduct) {
            sails.log.info(`Updated the product ${updatedProduct.title}.`);
          }
          else {
            sails.log.info(`The database does not contain a product id ${req.param('productId')}.`);
          }

        return res.json(updatedProduct);
    },

    createProduct: async function(req, res){
        var createdProduct;
        try {
            createdProduct = await Product.create(req.body).fetch();
        } catch (err) {
            switch (err.name) {
                case 'UsageError': return res.badRequest(err);
                default: throw err;
            }
        }

        return res.json(createdProduct);
    },

    deleteProductById: async function(req, res){

        var destroyedProduct;
        try {
            destroyedProduct = await Product.destroyOne({
                id: req.param('productId')
            });
        } catch (err) {
            switch (err.name) {
                case 'UsageError': return res.badRequest(err);
                default: throw err;
            }
        }
        if (destroyedProduct) {
         sails.log.info(`Deleted product with id ${req.param('productId')}.`);
        } else {
         sails.log.info(`The database does not have a product with id ${req.param('productId')}.`);
        }

        return res.json(destroyedProduct);
    }
};

