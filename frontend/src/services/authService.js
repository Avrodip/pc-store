import axios from 'axios';
import { apiRoutes } from './apiRoutes';
// require('dotenv').config();

const baseURL = "http://localhost:5050/"

export const userLogin = async (req) => {
    try {
        const response = await axios.post(baseURL + apiRoutes.login, req);
        return response.data;
    } catch (error) {
        if (error.response) {
            return { success: false, message: error.response.data.message };
        }
        return { success: false, message: 'An error occurred during login' };
    }
}

export const userRegistration = async (req) => {
    try {
        const response = await axios.post(baseURL + apiRoutes.register, req);
        return response.data;
    } catch (error) {
        if (error.response) {
            return { success: false, message: error.response.data.message };
        }
        return { success: false, message: 'An error occurred during Register' };
    }
}