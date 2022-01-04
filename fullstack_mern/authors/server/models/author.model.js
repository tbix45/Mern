//bring in mongoose
const mongoose = require("mongoose")

//make model 
//name of model capital letter and schema
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [2, "Name must be at least 2 characters long!"]
    }
})

//finalize setup
const Author = mongoose.model("Author", AuthorSchema)

//export the model so it can be used in project
module.exports = Author;