import React from "react";
import { Navigate, useOutlet} from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = () => {
    const {user, is2FAVerified} = useAuth();
    const outlet = useOutlet();

    if (!user) {
        console.log('Err');
        return <Navigate to="/login" replace />;
    } 
    if (!is2FAVerified) {
        return <Navigate to="/verify-2fa" />;
    }
    
    return outlet;
}

export default ProtectedRoute;