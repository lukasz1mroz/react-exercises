import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(key);
            if(value) {
                return JSON.parse(value);
            } else {
                window.localStorage.setItem(key, JSON.stringify(initialValue));
                return initialValue
            }
        } catch (err) {
            return initialValue;
        }
    })

    const setValue = (newValue) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(newValue));
        } catch (err) {
            console.error(err);
        }
        setStoredValue(newValue);
    }

    return [storedValue, setValue];
}
