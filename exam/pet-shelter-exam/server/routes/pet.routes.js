const PetController = require("../controllers/pet.controller");

module.exports = (app) => {
    //create
    app.post("/api/pet/create", PetController.createPet)
    //read one
    app.get("/api/pet/:_id", PetController.findOnePet)
    //read all
    app.get("/api/pet", PetController.findAllPets)
    //update
    app.put("/api/pet/update/:_id", PetController.updatePet)
    //delete
    app.delete("/api/pet/delete/:_id", PetController.deletePet)
}