const express = require('express')
const router = express.Router()

const mainController = require('../controllers/userController')

router.get('/login', mainController.login)
router.get('/profile', mainController.perfil)
router.get('/register', mainController.register)

module.exports = router