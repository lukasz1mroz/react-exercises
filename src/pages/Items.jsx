import React from "react";
import { useEffect, useMemo, useReducer } from "react";
import {useAuth} from "../hooks/useAuth";
import {itemReducer} from "../reducers/itemsReducer";

const initialTasks = {
    items: [],
    selectedItem: '',
};

const Items = () => {
    const {logout} = useAuth();
    const [state, dispatch] = useReducer(itemReducer, initialTasks);


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
            .then((data) => dispatch({ type: 'set', items: data }))
            .catch((error) => {
                console.error(error); 
            });
    }, []);

    const handleChangeItem = (item) => {
        dispatch({
            type: 'selected',
            item: item,
        })
    }

    const handleDeleteItem = () => {
        dispatch({
            type: 'deleted',
            item: state.selectedItem,
        })
    }

    const handleLogout = () => {
        logout();
    }

    const filteredItems = useMemo(() => {
        return state.items.filter(item => item.id === Number(state.selectedItem));
    }, [state.items, state.selectedItem]);

    return (
        <>
            <h1>Items</h1>
            <select value={state.selectedItem} onChange={(e) => handleChangeItem(e.target.value)}>
                <option value="" disabled>Select an item</option>
                {state.items.map((item) =>(
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
            {state.selectedItem && (
                <div>
                    <h2>Selected item: {filteredItems[0]?.name}</h2>
                    <button onClick={handleDeleteItem}>Delete</button>
                </div>
            )}
            <br/>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Items;