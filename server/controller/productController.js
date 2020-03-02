const Product = require('../models/product')

const ProductController = {
    saveProduct:(data,cb)=>{
        const product = new Product(data);
        product.save((err,prod)=>{
            cb(err,prod)
        })
    }
}

module.exports = ProductController