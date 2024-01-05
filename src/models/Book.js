import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    title: {type: String, required: true},
    publishing_company: {type: String},
    value: {type: Number},
    pages: {type: Number},
    author: authorSchema
}, {versionKey: false });

const book = mongoose.model("books", bookSchema);


export default book;