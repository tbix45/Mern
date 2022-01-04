//bring in mongoose
const mongoose = require("mongoose")

//make model 
//name of model capital letter and schema
const SnapshotSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [3, "Name must be at least 3 characters long!"]
    },
    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [3, "Title must be at least 3 characters long!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [3, "Description must be at least 3 characters long!"]
    },
    photo: {
        type: String
    }
})

//finalize setup
const Snapshot = mongoose.model("Snapshot", SnapshotSchema)

module.exports = Snapshot;