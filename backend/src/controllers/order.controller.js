const apiResponse = require("../helpers/apiResponse");
const { OrderManager } = require("../managers/order.manager")
const orderManager = new OrderManager();

class OrderController {
    async getSuccessfullOrderDetailsByUserID(req, res) {
        try {
            const result = await orderManager.getSuccessfullOrderDetailsByUserID(req, res);
            console.log("Result", result)
            if (result.length > 0) {
                return apiResponse.successResponseWithData(res, result.message, result);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }
    async cancleSuccessfullOrderByUserID(req, res) {
        try {
            const result = await orderManager.cancleSuccessfullOrderByUserID(req, res);
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

module.exports = { OrderController };