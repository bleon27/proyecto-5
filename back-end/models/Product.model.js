const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    titulo: {
        type: String,
        require: true
    },
    descripcion: {
        type: String
    },
    image: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    createdAt: {
        type: String,
        default: Date.now
    }
});

/**
 * const url = req.protocol + '://' + req.get('host')
 */

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;