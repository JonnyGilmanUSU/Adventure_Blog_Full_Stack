import { createContext, useState, useContext } from "react";
import axios from "axios";

// Create Context
const AuthContext = createContext();

// Function that uses the context
export function useAuth() {
    return useContext(AuthContext);
}

// Provider Component

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const login = (adminStatus) => {
        setIsLoggedIn(true);
        setIsAdmin(adminStatus);
    } 
    const logout = () => {
        axios.post('http://localhost:3001/logout', { withCredentials: true })
            .then(response => {
                console.log(response.data.message);
                setIsLoggedIn(false);
                setIsAdmin(false);
            })
            .catch(error => {
                console.error('Logout failed', error)
            })
    };
    

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, isAdmin }}>
            {children}
        </AuthContext.Provider>
    )
}