import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

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
                    return true;
                } else {
                    setIsLoggedIn(false);
                    localStorage.removeItem('pc-store');
                    localStorage.removeItem('pc-store-user');
                    return false;
                }
            } catch (error) {
                console.error('Error validating token:', error);
                setIsLoggedIn(false);
                localStorage.removeItem('pc-store');
                localStorage.removeItem('pc-store-user');
                return false;
            }
        } else {
            setIsLoggedIn(false);
            localStorage.removeItem('pc-store');
            localStorage.removeItem('pc-store-user');
            return false;
        }
    };

    useEffect(() => {
        checkTokenValidity().finally(() => setIsLoading(false));
    }, [isLoading]);


    const getCartSize = () => {

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
        <AuthContext.Provider value={{ isLoggedIn, login, logout, isLoading, checkTokenValidity }}>
            {children}
        </AuthContext.Provider>
    );
};
