import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ element }) => {
    const {user} = useAuth();

    console.log('user', user);

    
    if (!user) {
        console.log('Err');
        return <Navigate to="/login" replace />;
    } else {
        console.log('Ok');
        return element;
    }
}

export default ProtectedRoute;