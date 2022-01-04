//bring in mongoose
const mongoose = require("mongoose")

//make model 
//name of model capital letter and schema
const PetShelterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [3, "Name must be at least 3 characters long!"]
    },
    type: {
        type: String,
        required: [true, "Type is required!"],
        minlength: [3, "Type must be at least 3 characters long!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [3, "Description must be at least 3 characters long!"]
    },
    skill_1: {
        type: String,
    },
    skill_2: {
        type: String,
    },
    skill_3: {
        type: String,
    },
})

//finalize setup
const Pet = mongoose.model("Pet", PetShelterSchema)

module.exports = Pet;