const Snapshot = require("../models/snapshot.model")
//CRUD commands setup

//create
module.exports.createSnapshot = (req, res) => {
    console.log("Req.file is -->", req.file)
    const newSnapshotData = {
        ...req.body,
        photo: req.file.filename
    }
    Snapshot.create(newSnapshotData)
        .then(newSnapShot => res.json(newSnapShot))
        .catch(err => res.json({
            message: "Something went wrong when creating one snapshot!",
            err: err
        }))
}
//read one
module.exports.findOneSnapshot = (req, res) => {
    Snapshot.find({ _id: req.params._id })
        .then(oneSnapshot => res.json(oneSnapshot))
        .catch(err => res.json({
            message: "Something went wrong when finding one snapshot!",
            err: err
        }))
}
//read all
module.exports.findAllSnapshots = (req, res) => {
    Snapshot.find()
        .then(allSnapshots => res.json(allSnapshots))
        .catch(err => res.json({
            message: "Something went wrong when finding all snapshots!",
            err: err
        }))
}
//update
module.exports.updateSnapshot = (req, res) => {
    Snapshot.findOneAndUpdate({ _id: req.params._id }, req.body, { runValidators: true })
        .then(updatedSnapshot => res.json(updatedSnapshot))
        .catch(err => res.json({
            message: "Something went wrong when updating a snapshot!",
            err: err
        }))
}
//delete
module.exports.deleteSnapshot = (req, res) => {
    Snapshot.deleteOne({ _id: req.params._id })
        .then(deletedSnapshot => res.json(deletedSnapshot))
        .catch(err => res.json({
            message: "Something went wrong when deleting a snapshot!",
            err: err
        }))
}