const datos = require('../db/datos')

const productController = {
    product: function (req, res) {
        return res.render('product')
    },
    productAdd: function (req, res) {
        return res.render('productAdd')
    }
}

module.exports = productController