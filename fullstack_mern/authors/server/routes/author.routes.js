const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
    //create
    app.post("/api/author/create", AuthorController.createAuthor)
    //read one
    app.get("/api/author/:_id", AuthorController.findOneAuthor)
    //read all
    app.get("/api/author", AuthorController.findAllAuthors)
    //update
    app.put("/api/author/update/:_id", AuthorController.updateAuthor)
    //delete
    app.delete("/api/author/delete/:_id", AuthorController.deleteAuthor)
}