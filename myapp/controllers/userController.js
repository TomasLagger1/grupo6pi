const db = require('../db/datos')

const userController = {
    login: function (req, res) {
        return res.render('login')
    },
    profile: function (req, res) {
        return res.render('profile')
    },
    perfil: function (req, res) {
        const nombre = db.usuario.usuario
        const pfp = db.usuario.foto
        const mail = db.usuario.email
        return res.render('profile', {nombre, pfp, mail})
    },
    register: function (req, res) {
        return res.render('register')
    }
}

module.exports = userController