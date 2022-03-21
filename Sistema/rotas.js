const express = require('express');
rota = express.Router();


rota.get('/', (req, res) => {
    
    res.send("teste")  
});


module.exports = { rota }