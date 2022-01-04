//import model to work with it 
const Author = require("../models/author.model");

//now we set up basic CRUD commands 
//these functions are exported so any file that imports this controller has access to the functions

//create
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.json({
            message: "Something went wrong when creating one author",
            err: err
        }))
}

//read one
module.exports.findOneAuthor = (req, res) => {
    Author.find({ _id: req.params._id })
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json({
            message: "Something went wrong when finding one author!",
            err: err
        }))
}

//read all
module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json({
            message: "Something went wrong when finding all authors!",
            err: err
        }))
}

//update
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params._id }, req.body)
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.json({
            message: "Something went wrong when updating an author!",
            err: err
        }))
}

//delete
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params._id })
        .then(deletedAuthor => res.json(deletedAuthor))
        .catch(err => res.json({
            message: "Something went wrong when deleting an author!",
            err: err
        }))
}