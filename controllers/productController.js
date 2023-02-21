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

exports.searchProduct = async(req, res, next) => {

    try {
        const products = await Product.find({
            name: { $regex: req.params.name, $options: "i" },
        });

        res.json(products);
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}