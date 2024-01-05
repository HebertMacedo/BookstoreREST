import express from "express";
import books from "./booksRoutes.js";
import author from "./authorsRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.Js"));
    app.use(express.json(), books, author);
};

export default routes;
