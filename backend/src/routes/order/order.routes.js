const express = require("express")

const { OrderController } = require("../../controllers/order.controller")

const orderController = new OrderController();

const router = express.Router();

router.post("/getSuccessfullOrderDetailsByUserID", orderController.getSuccessfullOrderDetailsByUserID)
router.post("/cancleSuccessfullOrderByUserID", orderController.cancleSuccessfullOrderByUserID)

module.exports = router;