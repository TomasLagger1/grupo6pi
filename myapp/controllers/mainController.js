const db = require("../db/datos");

const mainController = {
    index: function (req, res) {
        return res.render('index')
    },
    searchResults: function (req, res) {
        return res.render('searchResults')
    }
}

module.exports = mainController