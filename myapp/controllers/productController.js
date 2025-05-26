const db = require('../database/models')

const productController = {
    product: function (req, res) {
        return res.render('product', {productos: db.Producto})
    },
    productAdd: function (req, res) {
        const nombre = db.usuario.usuario
        const pfp = db.usuario.foto
        const mail = db.usuario.email
        return res.render('productAdd', {nombre, pfp, mail})
    },
    detalle: function (req, res) {
        const idEncontrado = req.params.id;
      
        // const producto = []
        // for (let i = 0; i < db.Producto.length; i++) {
        //     const element = db.Producto[i];

        //     if (element.id == idEncontrado) {
        //         producto.push(element)
                
                
        //     }
            
        // }
        let idprod = req.params.id;

        db.Producto.findByPk(idprod, {
            include : [
                {association : "comentarios", include: [{association: "usuario"}]},
                {association : "usuario"}
            ]
        })
        .then(function(producto){
            //return res.send(producto)
            return res.render("product", {producto : producto})
        })
        
        // return res.render('product', {productos: producto})      
        
    }
}

module.exports = productController