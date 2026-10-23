let indexRouter = require("./routes/index")

const express = require("express")
const app = express()

app.use("/api", indexRouter)

module.exports = app