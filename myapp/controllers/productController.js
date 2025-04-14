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
    },
    detalle: function (req, res) {
        const idEncontrado = req.params.id;
      
        const producto = []
        for (let i = 0; i < db.productos.length; i++) {
            const element = db.productos[i];

            if (element.id == idEncontrado) {
                producto.push(element)
                
                
            }
            
        }  
        
        return res.render('product', {productos: producto})      
        
    }
}

module.exports = productController