// Importando o express, que é um framework web para Node.js
import express from "express";

// Importando a função que conecta ao banco de dados MongoDB
import conectaDatabase from "./config/dbConnect.js";

// Importando o modelo de dados para livros
import book from "./models/Book.js";

// Conectando ao banco de dados
const conexao = await conectaDatabase();

// Lidando com erros na conexão com o banco de dados
conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

// Comemorando quando a conexão com o banco de dados é feita com sucesso
conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
});

// Criando uma instância do express, que será nosso aplicativo (servidor)
const app = express();
app.use(express.json()); // Middleware para analisar solicitações com formato JSON

// Definindo a rota principal ("/") para uma mensagem simples
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.Js");
});

app.get("/books/:id", (req, res) => {
    const index = searchBook(req.params.id);
    res.status(200).json(books[index]);
});

// Rota para adicionar um novo livro
app.post("/books", (req, res) => {
    // Adicionando o novo livro à coleção
    books.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});

// Rota para atualizar um livro existente com base no ID
app.put("/books/:id", (req, res) => {
    // Implementação ausente: Procurar e atualizar o livro existente na coleção
    const index = searchBook(req.params.id);
    books[index].title = req.body.title;
    res.status(200).json(books);
});

// Rota para excluir um livro com base no ID
app.delete("/books/:id", (req, res) => {
    // Implementação ausente: Procurar e remover o livro da coleção
    const index = searchBook(req.params.id);
    books.splice(index, 1);
    res.status(200).send("Livro deletado com sucesso!");
});

// Exportando o aplicativo express para ser utilizado em outros lugares
export default app;
