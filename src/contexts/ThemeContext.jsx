import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (!savedTheme) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return savedTheme || 'dark';
    });

    useEffect(() => {
        const root = document.documentElement;
        const body = document.body;

        root.classList.remove('dark', 'light');
        body.classList.remove('dark', 'light');

        root.classList.add(theme);
        body.classList.add(theme);

        root.setAttribute('data-theme', theme);

        localStorage.setItem('theme', theme);

        root.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => {
            const newTheme = prev === 'dark' ? 'light' : 'dark';
            return newTheme;
        });
    };

    const setThemeDirect = (newTheme) => {
        if (newTheme === 'dark' || newTheme === 'light') {
            setTheme(newTheme);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme: setThemeDirect }}>
            {children}
        </ThemeContext.Provider>
    );
};
