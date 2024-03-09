const apiResponse = require("../helpers/apiResponse");
const { AdminManager } = require("../managers/admin.manager")
const adminManager = new AdminManager();

class AdminController {

    async getKrakenList(req, res) {
        try {
            const result = await adminManager.getKrakenList(req, res);

            if (result.length > 0) {
                return apiResponse.successResponseWithData(res, result.message, result);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }
    async getBehemothList(req, res) {
        try {
            const result = await adminManager.getBehemothList(req, res);

            if (result.length > 0) {
                return apiResponse.successResponseWithData(res, result.message, result);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }

    async getPredatorList(req, res) {
        try {
            const result = await adminManager.getPredatorList(req, res);

            if (result.length > 0) {
                return apiResponse.successResponseWithData(res, result.message, result);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }
    
    async getSlayerList(req, res) {
        try {
            const result = await adminManager.getSlayerList(req, res);

            if (result.length > 0) {
                return apiResponse.successResponseWithData(res, result.message, result);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }
    async insert_gaming_predator(req, res) {
        try {
            const result = await adminManager.insert_gaming_predator(req, res);

            if (result.length > 0) {
                return apiResponse.successResponseWithData(res, result.message, result);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }
    async insert_gaming_kraken(req, res) {
        try {
            const result = await adminManager.insert_gaming_kraken(req, res);

            if (result.length > 0) {
                return apiResponse.successResponseWithData(res, result.message, result);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }
    async insert_gaming_behemoth(req, res) {
        try {
            const result = await adminManager.insert_gaming_behemoth(req, res);

            if (result.length > 0) {
                return apiResponse.successResponseWithData(res, result.message, result);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }
    async insert_gaming_slayer(req, res) {
        try {
            const result = await adminManager.insert_gaming_slayer(req, res);

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

module.exports = { AdminController };