//게시글 검색
const pool = require("../../config/database")
//db사용

//제목 검색
exports.getBoard = (req, res) => {
  pool((conn) => {
    conn.query(
      "select * from tbl_board where b_title = ?",
      req.body.b_title,
      (err, row) => {
        err && console.log(err)
        res.send({ data: row }) //검색 결과 제공
      }
    )
    conn.release()
  })
}
