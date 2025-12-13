import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

const languages = [
    { code: 'fr', name: 'FR', fullName: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'EN', fullName: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'AR', fullName: 'العربية', flag: '🇸🇦' },
];

const LanguageSelector = () => {
    const { language, changeLanguage } = useLanguage();
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200
                    font-medium text-sm
                    ${theme === 'dark'
                        ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                        : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 shadow-sm'
                    }
                `}
                aria-label="Change language"
                aria-expanded={isOpen}
            >
                <span className="text-base">{currentLanguage.flag}</span>
                <span className="hidden sm:inline">{currentLanguage.name}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
            </button>

            {isOpen && (
                <div
                    className={`
                        absolute top-full mt-2 right-0 min-w-[160px] py-1 rounded-lg shadow-xl border z-50
                        animate-in fade-in slide-in-from-top-2 duration-150
                        ${theme === 'dark'
                            ? 'bg-slate-800 border-slate-700'
                            : 'bg-white border-gray-200'
                        }
                    `}
                >
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                changeLanguage(lang.code);
                                setIsOpen(false);
                            }}
                            className={`
                                w-full flex items-center gap-3 px-3 py-2.5 text-left transition-colors
                                ${language === lang.code
                                    ? theme === 'dark'
                                        ? 'bg-cyan-500/10 text-cyan-400'
                                        : 'bg-cyan-50 text-cyan-600'
                                    : theme === 'dark'
                                        ? 'text-slate-300 hover:bg-slate-700'
                                        : 'text-gray-700 hover:bg-gray-50'
                                }
                            `}
                        >
                            <span className="text-lg">{lang.flag}</span>
                            <span className="flex-1 text-sm font-medium">{lang.fullName}</span>
                            {language === lang.code && (
                                <Check className="h-4 w-4 text-cyan-500" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
