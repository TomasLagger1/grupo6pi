const express = require('express')
const router = express.Router()

const mainController = require('../controllers/userController')

router.get('/login', mainController.login)
router.get('/profile', mainController.profile)
router.get('/register', mainController.register)

module.exports = router