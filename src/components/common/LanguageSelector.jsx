import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../utils/cn';
import { useTheme } from '../../contexts/ThemeContext';

const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
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
                className={cn(
                    "group relative p-2.5 rounded-xl transition-all duration-300 flex items-center gap-2",
                    theme === 'dark'
                        ? 'bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 border border-slate-700 shadow-lg shadow-slate-900/50'
                        : 'bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-gray-100 border border-gray-200 shadow-lg shadow-gray-200/50'
                )}
                title="Change language"
            >
                <Globe className="h-5 w-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden sm:inline-block text-sm font-medium">
                    {currentLanguage.flag} {currentLanguage.name}
                </span>
            </button>

            {isOpen && (
                <div
                    className={cn(
                        "absolute top-full mt-2 right-0 w-48 rounded-xl shadow-2xl border backdrop-blur-lg z-50 animate-in fade-in slide-in-from-top-2 duration-200",
                        theme === 'dark'
                            ? 'bg-[#0f172a] border-white/10'
                            : 'bg-white border-gray-200'
                    )}
                >
                    <div className="p-2">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    changeLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                className={cn(
                                    "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all text-left",
                                    language === lang.code
                                        ? theme === 'dark'
                                            ? 'bg-cyan-500/20 text-cyan-400'
                                            : 'bg-cyan-50 text-cyan-600'
                                        : theme === 'dark'
                                            ? 'text-slate-300 hover:bg-white/5 hover:text-white'
                                            : 'text-gray-700 hover:bg-gray-50'
                                )}
                            >
                                <span className="text-xl">{lang.flag}</span>
                                <span className="flex-1 font-medium">{lang.name}</span>
                                {language === lang.code && (
                                    <Check className="h-4 w-4 text-cyan-400" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;

