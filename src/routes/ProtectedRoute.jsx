import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ element }) => {
    const {user, is2FAVerified} = useAuth();
    
    if (!user) {
        console.log('Err');
        return <Navigate to="/login" replace />;
    } 
    if (!is2FAVerified) {
        return <Navigate to="/verify-2fa" />;
    }
    
    return element;
}

export default ProtectedRoute;