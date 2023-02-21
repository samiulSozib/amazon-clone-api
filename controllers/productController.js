const { Product } = require('../models/product')

exports.getCategoryProduct = async(req, res, next) => {
    try {
        let category = req.query.category
        const products = await Product.find({ category: category });
        res.json(products)
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}