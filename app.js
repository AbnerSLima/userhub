const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '',
  database: 'userhub'
});

// Rota de registro
app.post('/register', (req, res) => {
  const { nome, login, senha } = req.body;

  if (!nome || !login || !senha) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
  }

  const query = 'INSERT INTO users (nome, login, senha) VALUES (?, ?, ?)';
  connection.query(query, [nome, login, senha], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Erro ao registrar usuário.' });
    }
    res.status(201).json({ message: 'Usuário registrado com sucesso!', userId: results.insertId });
  });
});

// Iniciar o servidor
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

connection.query("SELECT * FROM users", function (err, rows, fields) {
    if (!err) {
      console.log("Resultado:", rows);
    }else {
      console.log('Erro: Consulta não realizada com sucesso!');
    }
});