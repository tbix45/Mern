const express = require("express")
const app = express();
const port = 8000;

// A line of code for handling post requests
// this line of code allows us to get req.body information
// Make sure this line is close to the top! Especially above routes!
app.use(express.json(), express.urlencoded({ extended: true }));

// A connection to our config, which hooks up mongoose
require("./server/config/mongoose.config")

// A connection to our routes file
// require("./server/routes/animal.routes")(app)
const AllMyRoutes = require("./server/routes/animal.routes");
AllMyRoutes(app);

app.listen(port, () => console.log(`Running on port ${port}!!`));