// "localhost:8080/api/board"
const router = require("express").Router(),
  board = require("./board.controller")

router.post("/", board.getBoard)

module.exports = router
