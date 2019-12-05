import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const darkMode(value) {
    const [darkMode, setDarkMode] =  useLocalStorage(value)
    useEffect(() => {
        const body = document.querySelector('body')
        darkMode ? body.classList.add('dark-mode'); body.classList.remove('')[darkMode])
        return [darkMode, setDarkMode]
}