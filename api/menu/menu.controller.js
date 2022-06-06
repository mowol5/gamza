// 칼로리 데이터 API(저장, 조회)
const pool = require("../../config/database")
//db사용

//저장
exports.newMenu = (req, res) => {
  const param = [req.body.u_id, req.body.kind, req.body.weight, req.body.m_date]
  pool((conn) => {
    conn.query(
      "insert into tbl_eat values (0, ?, ?, ?, ?)",
      param,
      (err, row) => {
        err && console.log(err)
        res.send({ result: true })
      }
    )
    conn.release()
  })
}

//조회
exports.getMenu = (req, res) => {
  const param = [req.body.u_id]
  pool((conn) => {
    conn.query("select * from tbl_eat where id = ?", param, (err, row) => {
      err && console.log(err)
      res.send({ result: true })
    })
    conn.release()
  })
}
