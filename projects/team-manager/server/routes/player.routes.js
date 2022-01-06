const PlayerController = require("../controllers/player.controller");

module.exports = (app) => {
    // create 
    app.post("/api/player/create", PlayerController.createPlayer)
    // read all 
    app.get("/api/players", PlayerController.findAllPlayers)
    // read one 
    app.get("/api/player/:_id", PlayerController.findOnePlayer)
    // update 
    app.put("/api/player/update/:_id", PlayerController.updatePlayer)
    // delete 
    app.delete("/api/player/delete/:_id", PlayerController.deletePlayer)

}