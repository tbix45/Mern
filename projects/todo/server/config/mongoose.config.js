//establishes our connection to the database

//brings in mongoose
const mongoose = require("mongoose")

//connnect to our database
//change db name and make it unique
mongoose.connect("mongodb://localhost/task-list_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("I have found the mongoose (database)!!"))
    .catch((err) => console.log("I have lost the mongoose (database)", err))