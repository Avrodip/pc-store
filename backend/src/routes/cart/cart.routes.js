const express = require("express")

const { CartController } = require("../../controllers/cart.controllers")

const cartController = new CartController();

const router = express.Router();

router.post("/getCartList", cartController.getCartList)
router.post("/updateCart",cartController.updateCart)
router.post("/deleteCart",cartController.deleteCart)
router.post("/getProductByID",cartController.getProductByID)
// router.post("/getGamingCpuList/",processorController.getGamingCpuList)

module.exports = router;