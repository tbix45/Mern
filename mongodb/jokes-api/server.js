const express = require("express")
const app = express();
const port = 8000;

// A connection to our config, which hooks up to mongoose
require("./server/config/mongoose.config")

// A line of code for handling post requests
// Ths line of code allows us to get req.body information
// Make sure this line is close to the top! Especially above routes!
app.use(express.json(), express.urlencoded({ extended: true }));

// A connection to our routes file
const AllMyRoutes = require("./server/routes/joke.routes");
AllMyRoutes(app);

app.listen(port, () => console.log(`Running on port ${port}!!`));