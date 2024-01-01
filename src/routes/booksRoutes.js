// booksRoutes.js
import express from "express";
import BookController from "../controllers/bookController.js";

const books = express.Router();

books.get("/books", BookController.listBooks);
books.get("/books/:id", BookController.listBookID);
books.post("/books", BookController.registerBook);
books.put("/books/:id", BookController.updateBook);
books.delete("/books/:id", BookController.deleteBook);






export default books;






