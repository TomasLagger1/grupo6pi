const db = require('../database/models')

const bcrypt = require('bcryptjs');

const op = db.Sequelize.Op

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
        db.Usuario.findByPk(req.session.user.id, {
            include: [
                { association: "productos",
                    include:[{association:"comentarios"}]

                }
            ]
        })
        .then(function(usuario) {
            return res.render('profile', { usuario, mostrarPerfil: false });
        })
        .catch(function(error) {
            console.log(error);
            return res.send("Error al cargar el perfil");
        });
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
                nombre: req.body.name,
                documento: req.body.dni,
                nacimiento: req.body.date,
                foto: '/images/users/' + req.body.foto
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
            where: {
              [op.or]: [
                { email: req.body.identificador },
                { nombre: req.body.identificador }
              ]
            }
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