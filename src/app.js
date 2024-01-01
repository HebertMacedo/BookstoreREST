import express from "express";
import conectaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
// Conectando ao banco de dados
const conexao = await conectaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
});

const app = express();
routes(app);


app.delete("/books/:id", (req, res) => {
    const index = searchBook(req.params.id);
    books.splice(index, 1);
    res.status(200).send("Livro deletado com sucesso!");
});

export default app;
