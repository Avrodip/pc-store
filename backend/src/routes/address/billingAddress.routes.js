const express = require("express")

const { BillingAddressController } = require("../../controllers/billingAddress.controllers")

const billingAddressController = new BillingAddressController();

const router = express.Router();

router.post("/getbillingAddressList", billingAddressController.getbillingAddressList)
router.post("/getbillingAddressByID", billingAddressController.getbillingAddressByID)
router.post("/updateBillingAddress",billingAddressController.updateBillingAddress)
router.post("/deleteBillingAddress",billingAddressController.deleteBillingAddress)

module.exports = router;