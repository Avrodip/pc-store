const express = require("express")
const authRoutes = require("./auth/auth.routes")
const processorRoutes = require("./processor/processor.routes");

const app = express()

app.use("/auth/", authRoutes)
app.use("/processor/", processorRoutes)


module.exports = app;