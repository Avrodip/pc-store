const apiResponse = require("../helpers/apiResponse");
const AuthManager = require("../managers/auth.manager")
const authManager = new AuthManager();

class AuthController {

    async userLogin(req, res) {
        try {
            const result = await authManager.userLogin(req);

            console.log("Result : ", result)

            if (result !== null) {
                if (result.length > 0) {
                    return apiResponse.successResponseWithData(res, "Login Successfully.", result);
                }
                else {
                    return apiResponse.unauthorizedResponse(res, "Email or Password is wrong.");
                }
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }


    async userRegistration(req, res) {
        try {
            const result = await authManager.userRegistration(req);

            console.log("Results getting : ", result)

            if (result !== null) {
                if (result > 0) {
                    return apiResponse.conflictRequest(res, "User Already Exists.");
                } else {
                    return apiResponse.successResponseWithData(res, "Registration Success.", result);
                }
            } else {
                return apiResponse.forbiddenRequest(res, "Error while registeting user.");
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }

}

module.exports = { AuthController };