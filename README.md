# 📚 BookstoreREST

Este é um projeto de uma **API RESTful** para gerenciar uma livraria (**Bookstore**) com operações básicas de CRUD (Create, Read, Update, Delete).

## 📝 Descrição

A aplicação **BookstoreREST** foi desenvolvida para demonstrar a criação de uma API RESTful com o objetivo de gerenciar livros. A API permite as seguintes operações:

- 📖 Cadastro de novos livros.
- 🔍 Consulta de livros.
- ✏️ Atualização de informações de livros existentes.
- 🗑️ Exclusão de livros.
- 🔎 Filtragem de livros por título, autor e categoria.

## ⚙️ Tecnologias Utilizadas

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) Node.js
- ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) Express.js
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) MongoDB (banco de dados NoSQL)
- ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white) Mongoose (ODM para MongoDB)
- ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white) JWT (para autenticação)
- ![Joi](https://img.shields.io/badge/Joi-000000?style=for-the-badge&logo=joi&logoColor=white) Joi (para validação de dados)
- ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black) Swagger (para documentação da API)

## 🔧 Funcionalidades

- **GET /books**: Retorna uma lista de todos os livros cadastrados.
- **GET /books/{id}**: Retorna um livro específico baseado no ID.
- **POST /books**: Cadastra um novo livro.
- **PUT /books/{id}**: Atualiza os dados de um livro existente.
- **DELETE /books/{id}**: Remove um livro da livraria.
- **GET /books/search**: Filtra livros por título, autor ou categoria.

## 🏃‍♂️ Como Rodar o Projeto

### Pré-requisitos

Antes de rodar o projeto, certifique-se de ter o seguinte instalado:

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) **Node.js** (versão 14 ou superior).
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) **MongoDB** (pode ser a versão local ou utilizar o MongoDB Atlas).

### Passos

1. Clone este repositório:
   ```bash
   git clone https://github.com/HebertMacedo/BookstoreREST.git
   
2. Navegue até o diretório do projeto:
   ```bash
   cd BookstoreREST

3. Instale as dependências:
   ```bash
   npm install

4. Configure a conexão com o MongoDB no arquivo .env. Exemplo de configuração:
   ```bash
   MONGO_URI=mongodb://localhost:27017/bookstore

5. Inicie o servidor:
   ```bash
   npm install


## 🗃️ Banco de Dados

Este projeto utiliza o **MongoDB** como banco de dados. Para rodar localmente, certifique-se de ter o MongoDB instalado ou use uma instância do **MongoDB Atlas**. As credenciais de acesso devem ser configuradas no arquivo `.env`.

## 📝 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.


   
