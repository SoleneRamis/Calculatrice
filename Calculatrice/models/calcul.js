let connection = require('../config/db')

class Calcul {

  static create (content, cb) {
    connection.query('INSERT INTO calculs SET content = ?', [content], (err, result) => {
      if (err) throw err
      cb(result)
    })
  }

  static all (cb) {
    connection.query('SELECT * FROM calculs', (err, rows) => {
      if (err) throw err
      cb(rows)
    })
  }
}
