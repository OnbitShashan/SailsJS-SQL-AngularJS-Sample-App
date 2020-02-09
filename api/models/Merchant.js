
module.exports = {
    attributes: {
        title: { type: 'string', required: true },

        
        // Add a reference to Product
        product: {
            collection: 'product',
            via: 'merchant'
        }
    }
}