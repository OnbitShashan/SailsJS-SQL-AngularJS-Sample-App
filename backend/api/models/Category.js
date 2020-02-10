
module.exports = {
    attributes: {

        title: { type: 'string', required: true },
        
        parentId: {
            type: 'json'
        },
        // Add a reference to products
        product: {
            collection: 'product',
            via: 'category'
        }
    }
}