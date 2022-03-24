const express = require('express');
const rotas = require('./rotas');
const http = require('http');

// ---- Settings ---- //
const app = express();
require("dotenv").config();
const server = http.Server(app);

// ---- Página estática ---- //
app.use('/', express.static('Public'));

// ---- Setando as rotas ---- //
app.use('/api', rotas.rota)


// ---- Conectando o servidor ---- //
server.listen(process.env.PORT || 5000, () => {console.log("Servidor rodando...")})
