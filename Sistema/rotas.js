const functions = require('./functions.js')
const express = require('express');
rota = express.Router();


rota.get('/', (req, res) => {

    res.json(functions.conversao);
});

rota.post('/', express.json(), (req, res) => {

    let nome = req.body.nome_script;
    let tamanho = req.body.tamanho_script;
    let minuscula = req.body.minuscula_script;
    let maiuscula = req.body.maiuscula_script;
    let simbolos = req.body.simbolos_script ;
    let numeros = req.body.numeros_script;

    functions.embaralha(nome, tamanho, minuscula, maiuscula, simbolos, numeros)
    res.end()
});

module.exports = { rota }