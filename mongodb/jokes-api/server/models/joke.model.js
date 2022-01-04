// Bring in mongoose
const mongoose = require("mongoose");

// Make model
// Name of model with capital letter and schema.
const JokeSchema = new mongoose.Schema({
    //contain the elements of the model
    // name of attribute : data type
    setup: String,
    punchline: String
});

//Finalize setup
const Joke = mongoose.model("Joke", JokeSchema)

// export the model so it can be used in the project
module.exports = Joke;