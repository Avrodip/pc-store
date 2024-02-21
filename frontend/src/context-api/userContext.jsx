import React, { createContext, useState, useEffect, useContext } from 'react';
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
                } else {
                    setIsLoggedIn(false);
                    localStorage.removeItem('pc-store');
                    localStorage.removeItem('pc-store-user');
                }
            } catch (error) {
                console.error('Error validating token:', error);
                setIsLoggedIn(false);
                localStorage.removeItem('pc-store');
                localStorage.removeItem('pc-store-user');
            }
        }
        setIsLoading(false);
    };

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
        <AuthContext.Provider value={{ isLoggedIn, login, logout, isLoading, checkTokenValidity }}>{children}</AuthContext.Provider>
    );
};
