const router = require('express').Router()
const { getCategoryProduct, searchProduct } = require('../controllers/productController')
const auth = require('../middlewares/auth')

router.get('/', auth, getCategoryProduct)
router.get('/search/:name', auth, searchProduct)

module.exports = router