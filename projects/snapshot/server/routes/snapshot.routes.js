const SnapshotController = require("../controllers/snapshot.controller")
const multer = require('multer')
const { v4: uuidv4 } = require('uuid')
let path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images');
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });


module.exports = (app) => {
    //create
    app.post("/api/snapshot/create", upload.single("photo"), SnapshotController.createSnapshot)
    //read one
    app.get("/api/snapshot/:_id", SnapshotController.findOneSnapshot)
    //read all
    app.get("/api/snapshot", SnapshotController.findAllSnapshots)
    //update
    app.put("/api/snapshot/update/:_id", SnapshotController.updateSnapshot)
    //delete
    app.delete("/api/snapshot/delete/:_id", SnapshotController.deleteSnapshot)
}