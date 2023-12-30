import book from "../models/Book.js";

class BookController {
    static async listBooks (req, res){
        try {
        const listBooks = await book.find({});
        res.status(200).json(listBooks);
        
        } catch (erro) {

        }
        
    };

    static async registerBook (req, res) {
        try {

            const newBook = await book.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", book: newBook });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao cadastrar livro` })
            
        }
    }
};

export default BookController;