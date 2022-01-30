const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
const port = 8000;

app.use(express.json(), express.urlencoded({ extended: true }))
app.use(cors())

//a connection to our config file which hooks up mongoose commands
require("./config/mongoose.config")

//a connection to our routes file
const AllMyRoutes = require("./routes/task.routes");
AllMyRoutes(app);

app.listen(port, () => console.log(`Running on port ${port}!!`))