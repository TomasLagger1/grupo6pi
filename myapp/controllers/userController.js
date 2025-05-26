
const db = require('../database/models')

const bcrypt = require('bcryptjs');

const userController = {
    login: function(req, res){
        //Mostrar el formulario de loguin

        if (req.session.user) {
            return res.redirect('/');
          } else {
            return res.render("login", {error: null});
          }

        
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

        if (req.body.password.length < 3) {
            return res.send("La contraseña debe tener al menos 3 caracteres")
        }

        db.Usuario.findOne({
            where: [{email: req.body.email}]
        })

        .then(function(usuarioExistente) {
            if (usuarioExistente) {
                return res.send("Ese mail ya esta registrado")
            }

            const passEncriptada = bcrypt.hashSync(req.body.password, 10)

            db.Usuario.create({
                email: req.body.email,
                contrasenia: passEncriptada,
                documento: req.body.dni,
                nacimiento: req.body.date,
                foto: req.body.foto
            })

            .then(function(usuarioCreado) {
                req.session.user = usuarioCreado
                return res.redirect('/')
            })

            .catch(function(error){
                return res.send("Error al crear el usuario")
            });
        })

        .catch(function(error) {
            return res.send("Error al verificar el mail")
        })
    },  

    processLogin: function(req,res){

        db.Usuario.findOne({
            where: [{email: req.body.email}]
        })

        .then(function(user) {
            if (user) {
                const passwordValida = bcrypt.compareSync(req.body.password, user.contrasenia)

                if (passwordValida) {
                    req.session.user = user

                    if (req.body.remember) {
                        res.cookie('userEmail', user.email, { maxAge: 1000 * 60 * 60 * 24 * 7 })
                    }

                    return res.redirect('/')

                } else {
                    return res.render('login', {error: 'Contraseña incorrecta'})
                }

            } else {
                res.render('login', {error: 'Ese mail no esta registrado'})
            }

        })

        .catch(function(error){
            return res.send('Ocurrio un error al procesar el login')
        });
        
    },
    logout: function(req,res){
        //Procesamos el logout destruyendo la sesión y eliminando la cookie.
        req.session.destroy()
        res.clearCookie('userEmail')

        return res.redirect('/')
    }

}

module.exports = userController