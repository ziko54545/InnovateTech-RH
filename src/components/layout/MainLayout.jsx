import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import Header from './Header';

const MainLayout = () => {
    const { theme } = useTheme();
    const { dir } = useLanguage();

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#020817] text-white' : 'bg-gray-50 text-gray-900'}`} dir={dir}>
            <Header />
            <main className="w-[90%] mx-auto px-8 py-12 pt-24">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
