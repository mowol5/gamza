// "localhost:8080/api/menu"
const router = requier("express").Router(),
  calorie = require("./menu.controller")

router.post("./menu", menu.menu)

module.exports = router