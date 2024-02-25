import axios from 'axios';
import { apiRoutes } from './apiRoutes';

const baseURL = "http://localhost:5050/"

// Billing Address ------------------------------------------------------------------------
export const createUpdateBillingAddress = async (req) => {
    try {
        const response = await axios.post(baseURL + apiRoutes.addUpdateBillingAddress, req);
        return response.data;
    } catch (error) {
        if (error.response) {
            return { success: false, message: error.response.data.message };
        }
        return { success: false, message: 'An error occurred during Cart Add' };
    }
}


export const getBillingAddressListDetails = async (req) => {
    try {
        const response = await axios.post(baseURL + apiRoutes.getBillingAddressList, req);
        return response.data;
    } catch (error) {
        if (error.response) {
            return { success: false, message: error.response.data.message };
        }
        return { success: false, message: 'An error occurred during Cart Add' };
    }
}


export const getBillingAddressByID = async (req) => {
    try {
        const response = await axios.post(baseURL + apiRoutes.getBillingAddressByID, req);
        return response.data;
    } catch (error) {
        if (error.response) {
            return { success: false, message: error.response.data.message };
        }
        return { success: false, message: 'An error occurred during Cart Add' };
    }
}


// Shipping Address ------------------------------------------------------------------------
export const getShippingAddressByID = async (req) => {
    try {
        const response = await axios.post(baseURL + apiRoutes.getShippingAddressByID, req);
        return response.data;
    } catch (error) {
        if (error.response) {
            return { success: false, message: error.response.data.message };
        }
        return { success: false, message: 'An error occurred during Cart Add' };
    }
}

export const createUpdateShippingAddress = async (req) => {
    try {
        const response = await axios.post(baseURL + apiRoutes.addUpdateShippingAddress, req);
        return response.data;
    } catch (error) {
        if (error.response) {
            return { success: false, message: error.response.data.message };
        }
        return { success: false, message: 'An error occurred during Cart Add' };
    }
}
