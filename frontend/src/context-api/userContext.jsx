import { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        loggedIn: false,
        userID: 1,
    });

    const login = (id) => {
        setUser({ ...user, loggedIn: true, userID: id });
    };

    const logout = () => {
        setUser({ ...user, loggedIn: false, userID: null });
    };

    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}