const apiResponse = require("../helpers/apiResponse");
const { CartManager } = require("../managers/cart.manager")
const cartManager = new CartManager();

class CartController {

    async getCartList(req, res) {
        try {
            const result = await cartManager.getCartList(req, res);

            if (result.length > 0) {
                return apiResponse.successResponseWithData(res, result.message, result);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }
    async getProductByID(req, res) {
        try {
               const  result = await cartManager.getProductByID(req, res)
            if (result.length > 0) {
                return apiResponse.successResponseWithData(res, result.message, result);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }
    async getProductByArrayList(req, res) {
        try {
            let data = null;
            let result = []
            for(let i = 0; i<req.body.data.length; i++){
                 data = await cartManager.getProductByArrayList(req.body.data[i], res)
                 result.push(data[0][0]);
            }
            if (result.length > 0) {
                return apiResponse.successResponseWithData(res, result.message, result);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }
    async updateCart(req, res) {
        try {
            const result = await cartManager.updateCart(req, res);

            if (result.length > 0) {
                return apiResponse.successResponseWithData(res, result.message, result);
            } else {
                return apiResponse.conflictRequest(res, result.message);
            }
        } catch (error) {
            return apiResponse.expectationFailedResponse(res, error);
        }
    }
    async deleteCart(req, res) {
        try {
            const result = await cartManager.deleteCart(req, res);

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

module.exports = { CartController };