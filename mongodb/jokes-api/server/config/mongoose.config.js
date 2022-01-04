// This file establishe our connection to the database

// Bringing in mongoose
const mongoose = require("mongoose");

//We need to connect to our database
// Change name of database to match what you are working in. Make sure it is unique. 
mongoose.connect("mongodb://localhost/JokeSchema", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("I have found the mongoose!!"))
    .catch((err) => console.log("I lost the mongoose!!", err))