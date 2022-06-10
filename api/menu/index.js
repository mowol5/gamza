// "localhost:8080/api/menu"
const router = require("express").Router(),
  menu = require("./menu.controller")

router.post("/", menu.newMenu)

module.exports = router
