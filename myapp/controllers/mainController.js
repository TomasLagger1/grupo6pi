const db1 = require("../db/datos");

const db = require('../database/models')

const op = db.Sequelize.Op

const mainController = {
    index: function (req, res) {
        const proddd = db1.productos
        return res.render('index', {proddd})
    },
    searchResults: function (req, res) {
        const proddd = db.productos
        /* return res.render('searchResults', {proddd}) */

        db.Producto.findAll({
            where: [
                {nombre: { [op.like]: `%${req.query.search}%`} }
            ]
        })
        .then(function(productosEncontrados) {
            if (productosEncontrados.length > 0) {
                return res.render('searchResults', {productos: productosEncontrados, mensaje: null})
            } else {
                return res.render('searchResults', {productos: [], mensaje: "No hay resultados para su criterio de búsqueda"})
            }
        })
        .catch(function(error) {
            console.log(error)
            return res.send('Ocurrió un error al buscar el producto.');
        })
    },
}

module.exports = mainController