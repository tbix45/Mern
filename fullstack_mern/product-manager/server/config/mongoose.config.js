// This file establishes our connection to the database

// Bringing in mongoose
const mongoose = require("mongoose");

//We need to connect to our database
//Change name of database to match what you are working in. Must be unique.
mongoose.connect("mongodb://localhost/fullstack_product_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("I have found the mongoose!"))
    .catch((err) => console.log("I have lost the mongoose!", err))