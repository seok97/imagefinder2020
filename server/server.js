const express = require("express")
const app = express()
const cors = require("cors")

const indexRouter = require("./reqpage/index")
const dbconn = require("./reqpage/getuserlist")

app.use(cors())
app.use("/index", indexRouter)
app.use("/dbconn", dbconn)

const port = 3002

app.listen(port, () => console.log("express server listening on port " + port))
