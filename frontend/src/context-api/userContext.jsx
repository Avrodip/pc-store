import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { displayCartProductDetails } from '../services/configureCart';
import { StatusCode } from '../utils/contant';

// Create the context
export const AuthContext = createContext();
// Create the provider component
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkTokenValidity();
    }, []);
    const checkTokenValidity = async () => {
        const token = localStorage.getItem('pc-store');
        if (token) {
            try {
                const response = await axios.post('http://localhost:5050/api/auth/validateToken', { token });
                if (response.data.valid) {
                    setIsLoggedIn(true);
                    localStorage.setItem('pc-store-user', response.data.userID);
                    return { success: true, userID: response.data.userID };
                } else {
                    setIsLoggedIn(false);
                    localStorage.removeItem('pc-store');
                    localStorage.removeItem('pc-store-user');
                    return { success: false, userID: null };
                }
            } catch (error) {
                console.error('Error validating token:', error);
                setIsLoggedIn(false);
                localStorage.removeItem('pc-store');
                localStorage.removeItem('pc-store-user');
                return { success: false, userID: null };
            }
        } else {
            setIsLoggedIn(false);
            localStorage.removeItem('pc-store');
            localStorage.removeItem('pc-store-user');
            return { success: false, userID: null };
        }
    };

    useEffect(() => {
        checkTokenValidity().finally(() => setIsLoading(false));
    }, [isLoading]);

    const getCartSize = async () => {
        const result = await checkTokenValidity();
        const response = await displayCartProductDetails({ userID: result.userID })
        if (response.statusCode === StatusCode.success) {
            return response.data[0].length;
        }
        return 0;
    }

    const login = (token, userID) => {
        setIsLoggedIn(true);
        localStorage.setItem('pc-store', token);
        localStorage.setItem('pc-store-user', userID);
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('pc-store');
        localStorage.removeItem('pc-store-user');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, isLoading, checkTokenValidity, getCartSize }}>
            {children}
        </AuthContext.Provider>
    );
};
