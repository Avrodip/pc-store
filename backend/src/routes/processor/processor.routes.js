const express = require("express")

const { ProcessorController } = require("../../controllers/processor.controllers")

const processorController = new ProcessorController();

const router = express.Router();

router.post("/getPcPredatorDetails", processorController.getPcPredatorDetails)
router.post("/getPcKrakenDetails", processorController.getPcKrakenDetails)
router.post("/getPcBehemothDetails", processorController.getPcBehemothDetails)
router.post("/getPcSlayerDetails", processorController.getPcSlayerDetails)
router.post("/getGamingCpuList/",processorController.getGamingCpuList)

module.exports = router;