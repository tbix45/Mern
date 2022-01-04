const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 8000;

// A line of code for handling post requests
// this line of code allows us to get req.body information
// Make sure this line is close to the top! Especially above routes!
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors())

// A connection to our config file which hooks up mongoose commands
require("./server/config/mongoose.config")

// A connection to our routes file
const AllMyRoutes = require("./server/routes/pet.routes");
AllMyRoutes(app);

app.listen(port, () => console.log(`Running on port ${port}!!`));