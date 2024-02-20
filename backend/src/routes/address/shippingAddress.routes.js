const express = require("express")

const { ShippingAddressController } = require("../../controllers/shippingAddress.controller")

const shippingAddressController = new ShippingAddressController();

const router = express.Router();

router.post("/getShippingAddressList", shippingAddressController.getShippingAddressList)
router.post("/getShippingAddressByID", shippingAddressController.getShippingAddressByID)
router.post("/updateShippingAddress",shippingAddressController.updateShippingAddress)
router.post("/deleteShippingAddress",shippingAddressController.deleteShippingAddress)

module.exports = router;