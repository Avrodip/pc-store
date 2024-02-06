const express = require("express")

const { ProcessorController } = require("../../controllers/processor.controllers")

const processorController = new ProcessorController();

const router = express.Router();

router.post("/getGamingPcDetails", processorController.getGamingPcDetails)
router.post("/getGamingCpuList/",processorController.getGamingCpuList)

module.exports = router;