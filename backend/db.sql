CREATE DATABASE db_aula06;

USE db_aula06;

CREATE TABLE tb_disciplinas (
    id INT PRIMARY KEY AUTO_INCREMENT ,
    nome VARCHAR (30) NOT NULL,
    carga_horaria INT (2) NOT NULL
);

INSERT INTO tb_disciplinas (nome, carga_horaria)
VALUES ('ExpressJS', '20');

INSERT INTO tb_disciplinas (nome, carga_horaria)
VALUES ('Banco de Dados', '16');

INSERT INTO tb_disciplina (nome, carga_horaria)
VALUES ('NodeJS', '12');

--!Exemplo-->

UPDATE tb_disciplinas 
SET id=5 WHERE id=7;
