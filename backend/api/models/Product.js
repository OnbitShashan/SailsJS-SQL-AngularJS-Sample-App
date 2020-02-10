
module.exports = {
    attributes: {
        url: { type: 'string', required: true },
        title: { type: 'string', required: true },
        images: {type: 'json', required: true  },
        price: { type: 'number', columnType: 'FLOAT', required: true  },
        msrp: { type: 'number', defaultsTo: 0},
        available: { type: 'boolean', required: true  },
        description: { type: 'string', required: true  },

         // Add a reference to Category
        category: {
            model: 'category'
        },
         // Add a reference to Merchant
        merchant: {    
            model: 'merchant'
        }
    }
  };