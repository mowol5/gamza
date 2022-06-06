// "localhost:8080/api/calorie"
const router = requier("express").Router(),
  calorie = require("./menu.controller")

router.post("./calorie", calorie.calorie)

module.exports = router
