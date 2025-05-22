const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.get('/login', userController.login) 

router.get('/profile', userController.perfil)

router.get('/register', userController.register)
router.post('/newuser/', userController.create); 

router.post('/processLogin', userController.processLogin); 

router.get('/logout', userController.logout)

module.exports = router