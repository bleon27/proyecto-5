const Product = require("../models/Product.model");

const getProducts = async (req, res) => {
    try {
        const tipo = req.params.tipo;
        if (tipo == 'Todo') {
            Products = await Product.find();
        } else {
            Products = await Product.find({ type: tipo });
        }
        //console.log('Product', Product)
        const url = req.protocol + '://' + req.get('host')
        res.json({
            "result": { Products: Products, "url": url }
        });
    } catch (error) {
        res.json({
            "error": error.message
        });
    }
}

const getProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        res.json({ product: product });
    } catch (error) {
        res.status(401).json({
            "error": error.message
        });
    }
}

const postProducts = async (req, res) => {
    try {
        const addProduct = await new Product({
            title: req.body.title,
            image: req.body.image,
            description: req.body.description,
            price: req.body.price
        });
        addProduct.save();

        res.status(200).json({
            "result": Product
        });
    } catch (error) {
        res.json({
            "error": error.message
        });
    }
}

module.exports = { getProducts, getProduct }