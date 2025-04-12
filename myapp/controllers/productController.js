const db = require('../db/datos')

const productController = {
    product: function (req, res) {
        return res.render('product', {productos: db.productos})
    },
    productAdd: function (req, res) {
        const nombre = db.usuario.usuario
        const pfp = db.usuario.foto
        const mail = db.usuario.email
        return res.render('productAdd', {nombre, pfp, mail})
    }
}

module.exports = productController