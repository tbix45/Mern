// import model to work with it 
const Player = require("../models/player.model");

//now we set up basic CRUD commands 
//these functions are exported so any file that imports this controller has access to the functions


// create 
module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(newPlayer => res.json(newPlayer))
        .catch(err => res.json({
            message: "Something went wrong when creating one player",
            err: err
        }))
}
// read one 
module.exports.findOnePlayer = (req, res) => {
    Player.find({ _id: req.params._id })
        .then(onePlayer => res.json(onePlayer))
        .catch(err => res.json({
            message: "Something went wrong when finding one player!",
            err: err
        }))
}
// read all 
module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then(allPlayers => res.json(allPlayers))
        .catch(err => res.json({
            message: "Something went wrong when finding all players!",
            err: err
        }))
}
//update
module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params._id }, req.body)
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(err => res.json({
            message: "Something went wrong when updating a player!",
            err: err
        }))
}
// delete 
module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({ _id: req.params._id })
        .then(deletedPlayer => res.json(deletedPlayer))
        .catch(err => res.json({
            message: "Something went wrong when deleting a player!",
            err: err
        }))
}