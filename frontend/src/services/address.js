import axios from 'axios';
import { apiRoutes } from './apiRoutes';

const baseURL = "http://localhost:5050/"

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

