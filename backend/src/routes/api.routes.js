const express = require("express")
const authRoutes = require("./auth/auth.routes")
const processorRoutes = require("./processor/processor.routes");
const cartRoutes =  require("./cart/cart.routes")
const app = express()

app.use("/auth/", authRoutes)
app.use("/processor/", processorRoutes)
app.use("/cart/",cartRoutes);

module.exports = app;