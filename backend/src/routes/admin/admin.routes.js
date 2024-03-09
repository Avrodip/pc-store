const express = require("express")

const { AdminController } = require("../../controllers/admin.controllers")

const adminController = new AdminController();

const router = express.Router();

router.post("/getKrakenList", adminController.getKrakenList)
router.post("/getBehemothList", adminController.getBehemothList)
router.post("/getPredatorList", adminController.getPredatorList)
router.post("/getSlayerList", adminController.getSlayerList)
router.post("/insert_gaming_predator", adminController.insert_gaming_predator)
router.post("/insert_gaming_kraken", adminController.insert_gaming_kraken)
router.post("/insert_gaming_behemoth", adminController.insert_gaming_behemoth)
router.post("/insert_gaming_slayer", adminController.insert_gaming_slayer)
module.exports = router;