// this file established our connection to our database

//bringing in mongoose 
const mongoose = require("mongoose");

//connect to our database
mongoose.connect("mongodb://localhost/snapshot_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("I have found the mongoose!"))
    .catch((err) => console.log("I have lost the mongoose!", err))