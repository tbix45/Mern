//import model to work with
const Task = require('../models/task');

//set up CRUD commands
//they are exported so other files can use the functions

//create
module.exports.createTask = req, res => {
    Task.create(req.body)
        .then(newTask => res.json(newTask))
        .catch(err => res.json({
            message: "Something went wrong when creating a task",
            err: err
        }))
}