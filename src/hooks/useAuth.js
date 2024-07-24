import React from "react";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const [is2FAVerified, setIs2FAVerified] = useState(false);
    const navigate = useNavigate();

    const login = async (data) => {
        setUser(data);
        navigate("/verify-2fa");
    }

    const logout = () => {
        setUser(null);
        setIs2FAVerified(false);
        navigate("/", { replace: true });
    }

    const verify2FACode = async (code) => {
        if (code === "0000") {
          setIs2FAVerified(true);
          navigate("/items"); 
          return true;
        }
        return false;
      };

    const value = {
        user,
        is2FAVerified,
        login,
        logout,
        verify2FACode,
    };
        
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}