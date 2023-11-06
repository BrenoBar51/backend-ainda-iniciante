const express = require('express');
const router = express.Router();
const database = require('../connection/database');

router.get('/disciplinas', async (req, res) => {
    let dados = await database.execute('SELECT * FROM tb_disciplinas');
    res.send(dados);
});

router.post('/disciplinas', async (req, res) => {
    let dados = await database.execute(`
        INSERT INTO tb_disciplinas (nome, carga_horaria)
        VALUES ('${req.body.nome}', '${req.body.carga_horaria}');
    `)

    req.body.id = dados.insertId

    res.status(201).send(req.body);
});

router.delete('/disciplinas/:id', async (req, res) => {
    await database.execute(`
        DELETE FROM tb_disciplinas WHERE id=${req.params.id}
    `);

    res.status(204).send();
})

module.exports = router;