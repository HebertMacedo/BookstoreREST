// booksRoutes.js
import express from "express";
import authorController from "../controllers/authorController.js";

const authors = express.Router();

authors.get("/author", authorController.listAuthor);
authors.get("/author/:id", authorController.listAuthorID);
authors.post("/author", authorController.registerAuthor);
authors.put("/author/:id", authorController.updateAuthor);
authors.delete("/author/:id", authorController.deleteAuthor);

export default authors; // Corrigi o nome da exportação

