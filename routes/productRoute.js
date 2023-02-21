const router = require('express').Router()
const { getCategoryProduct, searchProduct, reateProduct } = require('../controllers/productController')
const auth = require('../middlewares/auth')

router.get('/', auth, getCategoryProduct)
router.get('/search/:name', auth, searchProduct)
router.post('/rate-product', auth, reateProduct)

module.exports = router