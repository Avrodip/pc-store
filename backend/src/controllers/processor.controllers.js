const apiResponse = require("../helpers/apiResponse");
const { ProcessorManager } = require("../managers/processor.manager")
const processorManager = new ProcessorManager();

class ProcessorController {

    async getGamingPcDetails(req, res) {
        try {
            const result = await processorManager.getGamingPcDetails(req, res);

            if (result.length > 0) {
                return apiResponse.successResponseWithData(res, result.message, result);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }

    async getGamingCpuList(req, res) {
        try {
            const result = await processorManager.getGamingCpuList(req, res);

            if (result.length > 0) {
                return apiResponse.successResponseWithData(res, result.message, result);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }
}

module.exports = { ProcessorController };