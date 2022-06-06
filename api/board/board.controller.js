//게시글 검색
const pool = require("../../config/database")
//db사용

//제목 검색
exports.getBoard = (req, res) => {
  const param = [req.body.b_title]
  pool((conn) => {
    conn.query("select * from tbl_board where id = ?", param, (err, row) => {
      err && console.log(err)
      res.send({ result: true })
    })
    conn.release()
  })
}
