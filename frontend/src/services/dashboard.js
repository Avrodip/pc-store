import axios from 'axios';
import { apiRoutes } from './apiRoutes';

const baseURL = "http://localhost:5050/"

export const changePassword = async (req) => {
    try {
        const response = await axios.post(baseURL + apiRoutes.changePassword, req);
        return response.data;
    } catch (error) {
        if (error.response) {
            return { success: false, message: error.response.data.message };
        }
        return { success: false, message: 'An error occurred during Password Change' };
    }
}
