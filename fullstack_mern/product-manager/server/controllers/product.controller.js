// we need to import the product model to work with it 
const Product = require('../models/product.model');

//Now we set up our basic CRUD commands
//These functions are exported so any file that imports this controller has access to the functions below
//CREATE
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json({
            message: "Something went wrong when creating one product!",
            err: err
        }))
}
//READ ONE
module.exports.findOneProduct = (req, res) => {
    Product.find({ _id: req.params._id })
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json({
            message: "Something went wrong when finding one product!",
            err: err
        }))
}
//READ ALL
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({
            message: "Something went wrong when finding all products!",
            err: err
        }))
}
//UPDATE
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params._id }, req.body, { runValidators: true })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json({
            message: "Something went wrong when updating one product!",
            err: err
        }))
}
//DELETE
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params._id })
        .then(deletedProduct => res.json(deletedProduct))
        .catch(err => res.json({
            message: "Something went wrong when deleting one product!!",
            err: err
        }))
}