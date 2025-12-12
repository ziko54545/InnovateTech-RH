import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const savedLang = localStorage.getItem('language');
        return savedLang || 'fr';
    });


    const dir = language === 'ar' ? 'rtl' : 'ltr';

    useEffect(() => {
        
        document.documentElement.setAttribute('dir', dir);
        document.documentElement.setAttribute('lang', language);
        
      
        localStorage.setItem('language', language);
    }, [language, dir]);

    const t = (key, params = {}) => {
        try {
            let translation = translations[language]?.[key] || translations['fr']?.[key] || key;
            
         
            if (Object.keys(params).length > 0) {
                Object.keys(params).forEach(param => {
                    translation = translation.replace(`{{${param}}}`, params[param]);
                });
            }
            
            return translation;
        } catch (e) {
            console.error('Translation error:', e);
            return key;
        }
    };

    const changeLanguage = (lang) => {
        if (['fr', 'en', 'ar'].includes(lang)) {
            setLanguage(lang);
        }
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t, dir }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
