const apiResponse = require("../helpers/apiResponse");
const { ShippingAddressManager } = require("../managers/shippingAddress.manager")
const shippingAddressManager = new ShippingAddressManager();

class ShippingAddressController {

    async getShippingAddressList(req, res) {
        try {
            const result = await shippingAddressManager.getShippingAddressList(req, res);

            if (result.length > 0) {
                return apiResponse.successResponseWithData(res, result.message, result);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }
    async updateShippingAddress(req, res) {
        try {
            const result = await shippingAddressManager.updateShippingAddress(req, res);

            if (result.length > 0) {
                return apiResponse.successResponseWithData(res, result.message, result);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }
    async deleteShippingAddress(req, res) {
        try {
            const result = await shippingAddressManager.deleteShippingAddress(req, res);

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

module.exports = { ShippingAddressController };