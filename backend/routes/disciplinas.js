const express = require('express');
const router = express.Router();
const database = require('../connection/database');

router.get('/disciplinas', async (req, res) => {
    let dados = await database.executar('SELECT * FROM tb_disciplinas');
    res.send(dados);
});

router.post('/disciplinas', async (req, res) => {
    let dados = await database.executar('SELECT * FROM tb_disciplinas');
    res.send(dados);
});

module.exports = router;