/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    getAllProduct: async function(req, res){

        var products;
        try {
            products = await Product.find();
        } catch (err) {
            switch (err.name) {
                case 'UsageError': return res.badRequest(err);
                default: throw err;
            }
        }

        return res.json(products);
    }
};

