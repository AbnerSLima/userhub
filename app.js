// Incluir a dependência MySQL
const mysql = require('mysql2');

// Criar a conexão com banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '',
  database: 'userhub'
});

connection.query("SELECT * FROM users", function (err, rows, fields) {
    if (!err) {
      console.log("Resultado:", rows);
    }else {
      console.log('Erro: Consulta não realizada com sucesso!');
    }
});