const express = require('express');
const rotas = require('./rotas');
const http = require('http');

// ---- Settings ---- //
const app = express();
const server = http.Server(app);

// ---- Página estática ---- //
app.use('/', express.static('Public'));

// ---- Setando as rotas ---- //
app.use('/', rotas.rota)


// ---- Conectando o servidor ---- //
server.listen(5000, () => {console.log("Servidor rodando...")})
