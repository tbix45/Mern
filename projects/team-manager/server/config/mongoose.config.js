//this file establishes our connect to the database

//bringing in mongoose
const mongoose = require("mongoose");

//connect to our database
//change name of database and make it unique
mongoose.connect("mongodb://localhost/team_manager_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("I have found the mongoose!"))
    .catch((err) => console.log("I have lost the mongoose", err))