// This file establishes our connection to the database

// Bringing in mongoose
const mongoose = require("mongoose");

// We need to connect to our database
// change name of database to match what you are working in. make sure it is unique.
mongoose.connect("mongodb://localhost/name_of_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("I have found the mongoose!!"))
    .catch(err => console.log("I lost the mongoose!!", err))
