import { useState } from 'react';

//Custom hook

//Control input dynamically

//export const useInput = (key, initialValue) => {
//     const [value, setValue] = useLocalStorage(key, initialValue);
//     const handleChanges = updatedValue => {
//         setValue(updatedValue);
//     };
//     return [value, setValue, handleChanges];
// };


//Set state in local storage

export const useLocalStorage = (key, initialMode) => {
    const [storedMode, setStoredMode] = useState (() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialMode;
    });
    const setMode = mode => {
        setStoredMode(mode);
        window.localStorage.setItem(key, JSON.stringify(mode));
    };
    return [storedMode, setMode];
};