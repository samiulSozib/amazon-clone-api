const Product = require('../models/product')


exports.addProduct = async(req, res, next) => {
    try {
        const { name, description, images, quantity, price, category } = req.body
        let product = new Product({
            name,
            description,
            images,
            quantity,
            price,
            category
        })

        product = await product.save();
        res.json(product)
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}