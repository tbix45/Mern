const AnimalController = require("../controllers/animal.controller")


module.exports = (app) => {
    // CREATE
    app.post("/api/animal/create", AnimalController.createAnimal);
    // READ ONE
    app.get("/api/animal/:_id", AnimalController.findOneAnimal);
    // READ ALL
    app.get("/api/animal", AnimalController.findAllAnimals);
    // UPDATE
    app.put("/api/animal/update/:_id", AnimalController.updateAnimal);
    // DELETE
    app.delete("/api/animal/delete/:_id", AnimalController.deleteAnimal);
}