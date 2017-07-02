let mysql = require('mysql');

let connection = mysql/createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root'
  database: 'Calculatrice'
})

connection.connect()

module.exports = connection
