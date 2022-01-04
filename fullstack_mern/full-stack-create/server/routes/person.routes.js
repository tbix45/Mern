const PersonController = require("../controllers/person.controller");
module.exports = function (app) {
    app.get("/api", PersonController.index);
    // POST
    app.post("/api/people", PersonController.createPerson)
    //READ ALL
    app.get("/api/people", PersonController.getAllPeople)
}