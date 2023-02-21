const router = require('express').Router()
const { getCategoryProduct } = require('../controllers/productController')
const auth = require('../middlewares/auth')

router.get('/', auth, getCategoryProduct)

module.exports = router