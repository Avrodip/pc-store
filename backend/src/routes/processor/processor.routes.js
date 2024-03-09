const express = require("express")

const { ProcessorController } = require("../../controllers/processor.controllers")

const processorController = new ProcessorController();

const router = express.Router();

router.post("/getGamingPcDetails", processorController.getGamingPcDetails)
router.post("/getPcPredatorDetails", processorController.getPcPredatorDetails)
router.post("/getPcKrakenDetails", processorController.getPcKrakenDetails)
router.post("/getPcBehemothDetails", processorController.getPcBehemothDetails)
router.post("/getPcSlayerDetails", processorController.getPcSlayerDetails)
router.post("/getGamingCpuList/", processorController.getGamingCpuList)
router.post("/getWorkstationCpuList/", processorController.getWorkstationCpuList)
router.post("/getPcEditingDetails/", processorController.getPcEditingDetails)
module.exports = router;