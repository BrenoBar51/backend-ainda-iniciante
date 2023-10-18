const express = require('express');
const disciplinasRouter = require('./routes/disciplinas');
const cors = require('cors');

const app = express();

//habilitar o uso do JSON nessa API
app.use(express.json());

//Liberar o acesso a servidor externos
app.use(cors());

//add as rotas de disciplina
app.use(disciplinasRouter);

//subir o servidor 
app.listen(8000);


//npx nodemon index.js
//http://localhost:8000/disciplinas