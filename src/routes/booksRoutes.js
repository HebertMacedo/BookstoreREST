// booksRoutes.js
import express from "express";
import BookController from "../controllers/bookController.js";

const books = express.Router();

books.get("/books", BookController.listBooks);

export default books;
