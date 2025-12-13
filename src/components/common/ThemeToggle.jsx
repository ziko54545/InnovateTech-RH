import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            onClick={toggleTheme}
            className={`
                relative inline-flex h-9 w-16 items-center rounded-full p-1
                transition-colors duration-300 ease-in-out
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                ${isDark
                    ? 'bg-slate-700 focus-visible:ring-slate-500'
                    : 'bg-cyan-100 focus-visible:ring-cyan-500'
                }
            `}
            role="switch"
            aria-checked={isDark}
            aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
        >
            <span className="absolute inset-1 flex items-center justify-between px-1.5">
                <Sun className={`h-4 w-4 transition-colors duration-300 ${isDark ? 'text-slate-500' : 'text-amber-500'}`} />
                <Moon className={`h-4 w-4 transition-colors duration-300 ${isDark ? 'text-indigo-300' : 'text-slate-400'}`} />
            </span>

            <span
                className={`
                    relative z-10 inline-block h-7 w-7 rounded-full shadow-md
                    transform transition-all duration-300 ease-in-out
                    flex items-center justify-center
                    ${isDark
                        ? 'translate-x-7 bg-slate-900'
                        : 'translate-x-0 bg-white'
                    }
                `}
            >
                {isDark ? (
                    <Moon className="h-4 w-4 text-indigo-400" />
                ) : (
                    <Sun className="h-4 w-4 text-amber-500" />
                )}
            </span>
        </button>
    );
};

export default ThemeToggle;
