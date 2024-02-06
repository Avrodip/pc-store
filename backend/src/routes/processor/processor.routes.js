const express = require("express")

const { ProcessorController } = require("../../controllers/processor.controllers")

const processorController = new ProcessorController();

const router = express.Router();

router.post("/getGamingProcessorCpu", processorController.getGamingProcessorCpu)

module.exports = router;