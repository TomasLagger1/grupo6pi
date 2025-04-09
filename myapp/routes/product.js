const express = require('express')
const router = express.Router()

const mainController = require('../controllers/productController')

router.get('/product', mainController.product)
router.get('/product-add', mainController.productAdd)

module.exports = router