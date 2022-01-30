//bring in mongoose 
const mongoose = require("mongoose")

//make model
//name of model capital letter and schema
const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, "Must enter a task!"],
        minlength: [2, "Task must be 2 characters long!"]
    },
    completed: {
        type: Boolean,
        default: fasle
    }
})

//finalize setup
const Task = mongoose.model("Task", TaskSchema)

//export model so it can be used
module.exports = Task