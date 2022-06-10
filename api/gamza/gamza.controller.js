//감자 API(이름 / exp 저장)
const pool = require("../../config/database") //DB 사용

//감자 이름 저장
exports.newGamza = (req, res) => {
  const param = [req.body.id, req.body.name]
  console.log(param)
  pool((conn) => {
    conn.query(
      "insert into tbl_gamja(u_id, g_name) value(?,?)",
      param,
      (err, row) => {
        err ? console.log(err) : res.send({ result: true })
      }
    )
    conn.release()
  })
}

//경험치 업데이트
exports.expGamza = (req, res) => {
  const param = [req.body.exp, req.body.id]
  pool((conn) => {
    conn.query(
      "update tbl_gamja set g_exp = ? where u_id = ?",
      param,
      (err, row) => {
        err && console.log(err)
        res.send({ result: true })
      }
    )

    conn.release()
  })
}

// 아이디 값 -> 감자 이름/경험치 조회
exports.getGamza = (req, res) => {
  pool((conn) => {
    conn.query(
      "select * from tbl_gamja where u_id = ?",
      req.body.id,
      (err, row) => {
        err && console.log(err)
        res.send({ data: row })
      }
    )
  })
}
