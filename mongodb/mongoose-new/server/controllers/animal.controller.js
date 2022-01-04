// We need to import the animal model to work with it. 
const Animal = require("../models/animal.model");

// Now we set up our basic CRUD commands

//CREATE
module.exports.createAnimal = (req, res) => {
    Animal.create(req.body)
        .then(newAnimal => res.json(newAnimal))
        .catch(err => res.json({
            message: "Something went wrong when creating an animal!!",
            err: err
        }))
}

// READ ONE
module.exports.findOneAnimal = (req, res) => {
    Animal.find({ _id: req.params._id })
        .then(oneAnimal => res.json(oneAnimal))
        .catch(err => res.json({
            message: "Something went wrong when finding one animal!!",
            err: err
        }))
}

// READ ALL
module.exports.findAllAnimals = (req, res) => {
    Animal.find()
        .then(allAnimals => res.json(allAnimals))
        .catch(err => res.json({
            message: "Something went wrong when finding all animals!!",
            err: err
        }))
}

// UPDATE
module.exports.updateAnimal = (req, res) => {
    Animal.findOneAndUpdate({ _id: req.params._id }, req.body)
        .then(updatedAnimal => res.json(updatedAnimal))
        .catch(err => res.json({
            message: "Something went wrong when updating one animal!!",
            err: err
        }))
}

// DELETE
module.exports.deleteAnimal = (req, res) => {
    Animal.deleteOne({ _id: req.params._id })
        .then(deletedAnimal => res.json(deletedAnimal))
        .catch(err => res.json({
            message: "Something went wrong when deleting one animal!!",
            err: err
        }))
}