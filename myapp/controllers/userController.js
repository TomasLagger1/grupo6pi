const db1 = require('../db/datos')

const db = require('../database/models')

const bcrypt = require('bcryptjs');

const userController = {
    login: function (req, res) {
        return res.render('login')
    },

    perfil: function (req, res) {
        const nombre = db1.usuario.usuario
        const pfp = db1.usuario.foto
        const mail = db1.usuario.email

        const proddd = db1.productos

        return res.render('profile', {nombre, pfp, mail, proddd})
    },

    register: function (req, res) {
        if (req.session.user) {
            return res.redirect('/');
          } else {
          return res.render("register");
          }
    },
    
    create: function(req, res){

        db.Usuario.findOne({
            where: [{email: req.body.email}]
        })
        .then(function(usuarioExistente) {
            if (usuarioExistente) {
                return res.send("Ese email ya esta registrado")
            }

            const passEncriptada = bcrypt.hashSync(req.body.password, 10)
        })

        if (req.body.password.length < 3) {
            return res.send("La contraseña debe tener al menos 3 caracteres")
        }


        db.Usuario.create({
            name: req.body.name,
            email: req.body.email,
            password: passEncriptada
        })
        .then(function(user) {
            req.session.user = user
            return res.redirect('/')
        })
        .catch(function(error){
            return res.send(error)
        });
    },  

}

module.exports = userController