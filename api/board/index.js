// "localhost:8080/api/board"
const router = requier("express").Router(),
  calorie = require("./board.controller")

router.post("./board", board.board)

module.exports = router
