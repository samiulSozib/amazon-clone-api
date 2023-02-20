const router = require('express').Router()
const { addProduct, getAllProducts, deleteProduct } = require('../controllers/adminController')
const admin = require('../middlewares/adminMiddleware')

router.post('/add-product', admin, addProduct)
router.get('/all-products', admin, getAllProducts)
router.post('/delete-product', admin, deleteProduct)

module.exports = router