const TaskController = require("../controllers/task.controller");

module.exports = (app) => {
    //create
    app.post("/api/task/create", TaskController.createTask)
    //read one
    app.get("/api/task/:_id", TaskController.findOneTask)
    //read all
    app.get("/api/task", TaskController.findAllTasks)
    //update
    app.put("/api/task/update/:_id", TaskController.updateTask)
    //delete
    app.delete("/api/task/delete/:_id", TaskController.deleteTask)
}