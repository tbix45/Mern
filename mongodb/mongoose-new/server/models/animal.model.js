// Bring in mongoose
const mongoose = require("mongoose");

// We make our model
// Name of model with capital letter and schema.
const AnimalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [2, "Name must be at least 2 characters!"]
    },
    fact: {
        type: Number,
        required: [true, "Number of projects is required!"]
    },
    isVet: {
        type: Boolean,
    },
    profilePicUrl: {
        type: String,
    }
});

// Finalize setup
const Animal = mongoose.model("Animal", AnimalSchema)

// export the model so it can be used in project
module.exports = Animal;