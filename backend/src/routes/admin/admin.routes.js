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
router.post("/insert_trading_four_monitor", adminController.insert_trading_four_monitor)
router.post("/insert_trading_dual_monitor", adminController.insert_trading_dual_monitor)
router.post("/insert_workstation_ai", adminController.insert_workstation_ai)
router.post("/workstation_trading_dual_monitor_List", adminController.workstation_trading_dual_monitor_details)
router.post("/workstation_trading_four_monitor_List", adminController.workstation_trading_four_monitor_details)
router.post("/workstation_ai_series_List", adminController.workstation_ai_series_details)
module.exports = router; 