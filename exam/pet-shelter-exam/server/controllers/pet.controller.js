const Pet = require("../models/pet.model");

//CRUD commands setup

//create
module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json(newPet))
        .catch(err => res.json({
            message: "Something went wrong when creating one pet!",
            err: err
        }))
}
//read one
module.exports.findOnePet = (req, res) => {
    Pet.find({ _id: req.params._id })
        .then(onePet => res.json(onePet))
        .catch(err => res.json({
            message: "Something went wrong when finding one pet!",
            err: err
        }))
}
//read all
module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets => res.json(allPets))
        .catch(err => res.json({
            message: "Something went wrong when finding all pets!",
            err: err
        }))
}
//update
module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params._id }, req.body)
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.json({
            message: "Something went wrong when updating a pet!",
            err: err
        }))
}
//delete
module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params._id })
        .then(deletedPet => res.json(deletedPet))
        .catch(err => res.json({
            message: "Something went wrong when deleting a pet!",
            err: err
        }))
}