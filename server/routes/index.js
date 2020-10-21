const express = require("express")
const router = express.Router()

router.get("/", function (req, res, next) {
  res.send({ test: "페이지 테스트" })
})

module.exports = router
