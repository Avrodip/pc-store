const express = require("express")
const authRoutes = require("./auth/auth.routes")

const app = express()

app.use("/auth/", authRoutes)

module.exports = app;