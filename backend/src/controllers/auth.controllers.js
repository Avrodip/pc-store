const apiResponse = require("../helpers/apiResponse");
const AuthManager = require("../managers/auth.manager")
const authManager = new AuthManager();

class AuthController {

    async userLogin(req, res) {
        try {
            const result = await authManager.userLogin(req);

            if (result.success) {
                return apiResponse.successResponseWithData(res, result.message, result.data);
            } else {
                return apiResponse.unauthorizedResponse(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }


    async userRegistration(req, res) {
        try {
            console.log("During registration : ", req)
            const result = await authManager.userRegistration(req);

            console.log("Results getting : ", result)

            if (result.success) {
                return apiResponse.successResponseWithData(res, result.message, result.data);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }


    async getUserDetailsByID(req, res) {
        try {
            const result = await authManager.getUserDetilsByID(req);

            console.log("Results getting : ", result)

            if (result.success) {
                return apiResponse.successResponseWithData(res, result.message, result.data);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }

    async forgetPassword(req, res) {
        try {
            const result = await authManager.forgetPassword(req);

            console.log("Results getting : ", result)

            if (result.success) {
                return apiResponse.successResponseWithData(res, result.message, result.data);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }

    async verifyOtp(req, res){
        try {
            const result = await authManager.verifyOtp(req);
    
            if (result.success) {
                return apiResponse.successResponseWithData(res, result.message, result.data);
            } else {
                return apiResponse.errorResponse(res, result.message, 400);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    };
}

module.exports = { AuthController };