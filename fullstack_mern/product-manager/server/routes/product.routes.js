const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    //CREATE
    app.post("/api/product/create", ProductController.createProduct)
    //READ ONE
    app.get("/api/product/:_id", ProductController.findOneProduct)
    //READ ALL
    app.get("/api/product", ProductController.findAllProducts)
    //UPDATE
    app.put("/api/product/update/:_id", ProductController.updateProduct)
    //DELETE
    app.delete("/api/product/delete/:_id", ProductController.deleteProduct)
}