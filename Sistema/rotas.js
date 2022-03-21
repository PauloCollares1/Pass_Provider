const functions = require('./functions.js')
const express = require('express');
rota = express.Router();


rota.post('/api', express.json(), (req, res) => {

    let nome = req.body.nome_script;
    let tamanho = req.body.tamanho_script;
    let minuscula = req.body.minuscula_script;
    let maiuscula = req.body.maiuscula_script;
    let simbolos = req.body.simbolos_script ;
    let numeros = req.body.numeros_script;


    console.log(nome,tamanho,minuscula,maiuscula,simbolos,numeros)

    res.end()
});

rota.get('/api', (req, res) => {

    const teste = "Toma essa aqui otario";
    console.log("esse é o teste: ",teste);
    res.json(teste);
});


module.exports = { rota }