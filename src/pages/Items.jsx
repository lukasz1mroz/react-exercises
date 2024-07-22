import React from "react";
import {useAuth} from "../hooks/useAuth";

const Items = () => {
    const {logout} = useAuth();

    const handleLogout = () => {
        console.log('logout')
        logout();
    }

    return (
        <>
            <h1>Items</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Items;