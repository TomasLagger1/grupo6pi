const express = require('express')
const router = express.Router()

const mainController = require('../controllers/productController')

router.get('/', mainController.product)
router.get('/product-add', mainController.productAdd)
router.get('/detalle/:id', mainController.detalle)

module.exports = router