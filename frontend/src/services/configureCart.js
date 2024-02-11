import axios from 'axios';
import { apiRoutes } from './apiRoutes';

const baseURL = "http://localhost:5050/"

export const createProductCart = async (req) => {
    try {
        const response = await axios.post(baseURL + apiRoutes.addUpdateCart, req);
        return response.data;
    } catch (error) {
        if (error.response) {
            return { success: false, message: error.response.data.message };
        }
        return { success: false, message: 'An error occurred during Cart Add' };
    }
}


export const displayCartProductDetails = async (req) => {
    try {
        const response = await axios.post(baseURL + apiRoutes.cartProductList, req);
        return response.data;
    } catch (error) {
        if (error.response) {
            return { success: false, message: error.response.data.message };
        }
        return { success: false, message: 'An error occurred during Cart Add' };
    }
}


export const deleteCartProduct = async (req) => {
    try {
        console.log("dfgdgdgd : ", req)
        const response = await axios.post(baseURL + apiRoutes.deleteCartProduct, req);
        return response.data;
    } catch (error) {
        if (error.response) {
            return { success: false, message: error.response.data.message };
        }
        return { success: false, message: 'An error occurred during Cart Add' };
    }
}