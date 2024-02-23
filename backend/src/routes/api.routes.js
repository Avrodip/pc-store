const express = require("express")
const authRoutes = require("./auth/auth.routes")
const processorRoutes = require("./processor/processor.routes");
const cartRoutes = require("./cart/cart.routes")
const billingAddressRoutes = require("./address/billingAddress.routes")
const shippingAddressRoutes = require("./address/shippingAddress.routes")
const paymentRoutes = require('../routes/payment/payment.rotue')
const validateToken = require("../middlewares/auth")
const app = express()

app.use("/auth/", authRoutes);
app.use("/auth", validateToken);
app.use("/processor/", processorRoutes);
app.use("/cart/", cartRoutes);
app.use("/billingAddress/", billingAddressRoutes);
app.use("/shippingAddress/", shippingAddressRoutes);
app.use("/payment/", paymentRoutes);

module.exports = app;