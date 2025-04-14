const db = require("../db/datos");

const mainController = {
    index: function (req, res) {
        const proddd = db.productos
        return res.render('index', {proddd})
    },
    searchResults: function (req, res) {
        return res.render('searchResults', {proddd: db.productos})
    },
}

module.exports = mainController