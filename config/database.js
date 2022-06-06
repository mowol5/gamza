const mysql = require("mysql"),
  db_info = {
    host: "pino-hoo.csu91uf8yo4l.ap-northeast-2.rds.amazonaws.com",
    port: "3306",
    user: "root",
    password: "qwer1595",
    database: "gamza",
  },
  pool = mysql.createPool(db_info)

module.exports = (callback) => {
  pool.getConnection((err, conn) => {
    if (!err) {
      callback(conn)
    }
  })
}
