const express = require("express")

const { AdminController } = require("../../controllers/admin.controllers")

const adminController = new AdminController();

const router = express.Router();

router.post("/getKrakenList", adminController.getKrakenList)
router.post("/getBehemothList", adminController.getBehemothList)
router.post("/getPredatorList", adminController.getPredatorList)
router.post("/getSlayerList", adminController.getSlayerList)
module.exports = router;