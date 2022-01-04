// we need to import the animal model to work with it.
const Joke = require("../models/joke.model")

// Now we set up our basic CRUD commands

// CREATE
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({
            message: "Something went wrong when creating a joke!",
            err: err
        }))
}

// READ ONE 
module.exports.findOneJoke = (req, res) => {
    Joke.find({ _id: req.params._id })
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json({
            message: "Something went wrong when finding one animal!!",
            err: err
        }))
}

// READ ALL
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json({
            message: "Something went wrong when finding all jokes!!",
            err: err
        }))
}
// UPDATE
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body)
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json({
            message: "Something went wrong when updating one joke!!",
            err: err
        }))
}
// DELETE
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then(deletedJoke => res.json(deletedJoke))
        .catch(err => res.json({
            message: "Something went wrong when deleting one joke!!",
            err: err
        }))
}
