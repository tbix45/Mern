const JokeController = require("../controllers/joke.controller")

module.exports = (app) => {
    //CREATE
    app.post("/api/joke/create", JokeController.createJoke);
    // READ ONE
    app.get("/api/joke/:_id", JokeController.findOneJoke);
    // READ ALL
    app.get("/api/joke", JokeController.findAllJokes);
    // UPDATE
    app.put("/api/joke/update/:_id", JokeController.updateJoke);
    // DELETE
    app.delete("/api/joke/delete/:_id", JokeController.deleteJoke);
}


// postman requests on http://localhost:8000