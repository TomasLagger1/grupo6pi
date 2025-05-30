const db = require('../database/models')

const productController = {
    product: function (req, res) {
        return res.render('product', {productos: db.Producto})
    },
    productAdd: function (req, res) {

        if (!req.session.user) {
            res.redirect('/users/login')
        }

        const nombre = req.session.user.nombre; 
        const pfp = req.session.user.foto; 
        const mail = req.session.user.email; 

        return res.render('productAdd', { nombre, pfp, mail });
    },
    detalle: function (req, res) {
        const idEncontrado = req.params.id;
      
        let idprod = req.params.id;

        db.Producto.findByPk(idprod, {
            include : [
                {association : "comentarios", include: [{association: "usuario"}]},
                {association : "usuario"}
            ]
        })
        .then(function(producto){
            //return res.send(producto)
            return res.render("product", {producto : producto, user: req.session.user})
        })
    },
    agregarComentario: function (req,res) {
        if (!req.session.user) {
            res.redirect('/users/login')
        }

        db.Comentario.create({
            usuarioId: req.session.user.id,
            productoId: req.params.id,
            comentario: req.body.agregarComentario
        })
        .then(function(comentarioAgregado) {
            res.redirect('/product/detalle/' + req.params.id)
        })
        .catch(function(error) {
            res.send(error);
        });
    },
    agregarProducto: function (req, res) {
        db.Producto.create({
            usuarioId: req.session.user.id,
            imagen: '/images/products/' + req.body.imagen,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
        })
        .then(function(productoCreado) {
            return res.redirect('/product/detalle/' + productoCreado.id);
        })
        .catch(function(error) {
            return res.send(error);
        });
    }
}

module.exports = productController