const db = require('../db/datos')

const userController = {
    login: function (req, res) {
        return res.render('login')
    },
    perfil: function (req, res) {
        const nombre = db.usuario.usuario
        const pfp = db.usuario.foto
        const mail = db.usuario.email

        const proddd = db.productos

        return res.render('profile', {nombre, pfp, mail, proddd})
    },
    register: function (req, res) {
        return res.render('register')
    }
}

module.exports = userController