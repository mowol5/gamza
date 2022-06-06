//감자 API(이름 / exp 저장)
const pool = require("../../config/database") //DB 사용

//감자 이름 저장
exports.newGamza = (req, res) => {
  const param = [req.body.member_id, req.body.gamza_id]
  pool((conn) => {
    conn.query(
      "insert into tbl_gamza(member_id, gamza_id) value(?,?)",
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
  const param = [req.body.member_id, req.body.exp]
  pool((conn) => {
    conn.query(
      "update tbl_gamza set exp = ? where member_id = ?",
      [param[1], param[0]],
      (err, row) => {
        err && console.log(err)
        row[3] = param[1]
        res.send({ result: true })
      }
    )

    conn.release()
  })
}
