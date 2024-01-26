import axios from 'axios';
import { apiRoutes } from './apiRoutes';
// require('dotenv').config();

const baseURL = "http://localhost:5050/"

export const userLogin = async (req) => {
    const response = await axios.post(baseURL + apiRoutes.login, req);
    return response.data;
}

export const userRegistration = async (req) => {
    const response = await axios.post(baseURL + apiRoutes.register, req);
    return response.data;
}