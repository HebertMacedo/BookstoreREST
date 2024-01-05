import {author} from "../models/Author.js";

class authorController {
    static async listAuthor (req, res){
        try {
        const listAuthor = await author.find({});
        res.status(200).json(listAuthor);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} falha na requisição` });
        }
    };

    static async listAuthorID (req, res){
        try {
        const id = req.params.id;
        const authorFound = await author.findById(id);
        res.status(200).json(authorFound);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} falha na requisição do livro` });
        }
    };


    static async registerAuthor (req, res) {
        try {

            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", author: newAuthor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao cadastrar livro` })
            
        }
    }

    static async updateAuthor (req, res){
        try {
        const id = req.params.id;
        await author.findByIdAndUpdate(id, req.body);
        res.status(200).json( {message: "Autor atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} falha na atualização` });
        }
    };

    static async deleteAuthor (req, res){
        try {
        const id = req.params.id;
        await author.findByIdAndDelete(id);
        res.status(200).json( {message: "Autor excluido com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} falha na exclusão` });
        }
    };
};

export  default authorController;
;