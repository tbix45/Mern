//Bring in mongoose
const mongoose = require("mongoose")

// Make our model
// Name of model with capital letter and schema.
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [2, "Title must be 2 characters long!"]
    },
    price: {
        type: Number,
        required: [true, "Must have a price!"]
    },
    description: {
        type: String,
        required: [true, "Must have a description!"]
    },
    is_veg: {
        type: Boolean,
    }
});

//Finalize setup 
const Product = mongoose.model("Product", ProductSchema)

// export the model so it can be used in the project
module.exports = Product;