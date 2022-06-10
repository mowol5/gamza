// "localhost:8080/api/gamza"
const router = require("express").Router(),
  gamza = require("./gamza.controller")

router.post("/", gamza.newGamza)
router.put("/", gamza.expGamza)
router.post("/data", gamza.getGamza)

module.exports = router
