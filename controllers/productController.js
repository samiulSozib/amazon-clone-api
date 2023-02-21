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

// rating product 

exports.reateProduct = async(req, res, next) => {
    try {
        const { id, rating } = req.body;
        let product = await Product.findById(id);

        for (let i = 0; i < product.ratings.length; i++) {
            if (product.ratings[i].userId == req.user) {
                product.ratings.splice(i, 1);
                break;
            }
        }

        const ratingSchema = {
            userId: req.user,
            rating,
        };

        product.ratings.push(ratingSchema);
        product = await product.save();
        res.json(product);
    } catch (e) {
        res.status(500).json({ error: e.message })

    }
}