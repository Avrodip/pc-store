const express = require("express")

const { OrderController } = require("../../controllers/order.controller")

const orderController = new OrderController();

const router = express.Router();

router.post("/getSuccessfullOrderDetailsByUserID", orderController.getSuccessfullOrderDetailsByUserID)

module.exports = router;