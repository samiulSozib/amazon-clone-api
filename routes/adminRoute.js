const router = require('express').Router()
const { addProduct } = require('../controllers/adminController')
const admin = require('../middlewares/adminMiddleware')

router.post('/add-product', addProduct)

module.exports = router