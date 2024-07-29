import React from "react";
import { useState, useEffect } from "react";
import {useAuth} from "../hooks/useAuth";

const Items = () => {
    const {logout} = useAuth();
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    const fetchItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const shouldFail = Math.random() > 0.9;
                if(shouldFail) {
                    reject(new Error('Failed to fetch items'));
                } else {
                    resolve([
                        { id: 1, name: 'Item 1' },
                        { id: 2, name: 'Item 2' },
                        { id: 3, name: 'Item 3' },
                    ]);
                }
            }, 1000);
        })
    }

    useEffect(() => {
        fetchItems()
            .then((data) => setItems(data))
            .catch((error) => {
                console.error(error); 
                setError(error)
            });
    });

    // TODO: Implement useMemo to memoize filteredItems
    // TODO: Implement reducer to manage items state

    const handleLogout = () => {
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