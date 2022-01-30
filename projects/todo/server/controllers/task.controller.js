//import model to work with
const Task = require('../models/task');

//set up CRUD commands
//they are exported so other files can use the functions

//create
module.exports.createTask = (req, res) => {
    Task.create(req.body)
        .then(newTask => res.json(newTask))
        .catch(err => res.json({
            message: "Something went wrong when creating a task",
            err: err
        }))
}

//read one
module.exports.findOneTask = (req, res) => {
    Task.find({ _id: req.params._id })
        .then(oneTask => res.json(oneTask))
        .catch(err => res.json({
            message: "Something went wrong when finding one task!",
            err: err
        }))
}
//read all
module.exports.findAllTasks = (req, res) => {
    Task.find()
        .then(allTasks => res.json(allTasks))
        .catch(err => res.json({
            message: "Something went wrong when finding all tasks!",
            err: err
        }))
}
//update
module.exports.updateTask = (req, res) => {
    Task.findOneAndUpdate({ _id: req.params._id }, req.body)
        .then(updatedTask => res.json(updatedTask))
        .catch(err => res.json({
            message: "Something went wrong when updating a task!",
            err: err
        }))
}
//delete
module.exports.deleteTask = (req, res) => {
    Task.deleteOne({ _id: req.params._id })
        .then(deletedTask => res.json(deletedTask))
        .catch(err => res.json({
            message: "Something went wrong when deleting a task!",
            err: err
        }))
}