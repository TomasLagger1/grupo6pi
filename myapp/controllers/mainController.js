const db = require("../db/datos");

const mainController = {
    index: function (req, res) {
        let imagenes = ['airpodsmax.png', 'airtags.jpg', 'apple-watch-ultra.jpg', 'homepod.jpg', 'img-macbook-pro-2019.jpg', 'img-samsung-galaxy-s10.jpg', 'img-tv-samsung-smart.jpg', 'ipadpro.png', 'iphone16.jpg', 'macbook-pro.jpg', 'magic-keyboard.jpg', 'studio-display.png', 'visionpro.jpg']
        return res.render('index', {imagenes})
    },
    searchResults: function (req, res) {
        return res.render('searchResults')
    }
}

module.exports = mainController