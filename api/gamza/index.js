// "localhost:8080/api/gamza"
const router = requier("express").Router(),
  gamza = require("./gamza.controller")

router.post("./gamza", gamza.gamza)

module.exports = router
