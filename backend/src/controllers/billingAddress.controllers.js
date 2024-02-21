const apiResponse = require("../helpers/apiResponse");
const { BillingAddressManager } = require("../managers/billingAddress.manager")
const billingAddressManager = new BillingAddressManager();

class BillingAddressController {

    async getbillingAddressList(req, res) {
        try {
            const result = await billingAddressManager.getbillingAddressList(req, res);

            if (result.length > 0) {
                return apiResponse.successResponseWithData(res, result.message, result);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }
    async getbillingAddressByID(req, res) {
        try {
            const result = await billingAddressManager.getbillingAddressByID(req, res);

            if (result.length > 0) {
                return apiResponse.successResponseWithData(res, result.message, result);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }
    async updateBillingAddress(req, res) {
        try {
            const result = await billingAddressManager.updateBillingAddress(req, res);

            if (result.length > 0) {
                return apiResponse.successResponseWithData(res, result.message, result);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }
    async deleteBillingAddress(req, res) {
        try {
            const result = await billingAddressManager.deleteBillingAddress(req, res);

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

module.exports = { BillingAddressController };