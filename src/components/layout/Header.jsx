import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { Building2, LayoutDashboard, Users, LogOut, Sun, Moon } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSelector from '../common/LanguageSelector';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const { theme, toggleTheme } = useTheme();
    const { t, dir } = useLanguage();
    const [logoRotate, setLogoRotate] = useState(true);

    const navItems = [
        { href: '/dashboard', labelKey: 'dashboard', icon: LayoutDashboard },
        { href: '/employees', labelKey: 'employees', icon: Users },
    ];

    useEffect(() => {
        setLogoRotate(true);
        const timer = setTimeout(() => {
            setLogoRotate(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    const handleSignOut = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <header className={cn(
            "fixed top-0 z-50 w-full border-b backdrop-blur-lg",
            theme === 'dark'
                ? 'border-white/5 bg-[#0a1628]/80'
                : 'border-gray-200 bg-white/80'
        )} dir={dir}>
            <div className="w-[90%] mx-auto flex h-16 items-center justify-between px-8">
                <div className="flex items-center gap-6">
                    <Link to="/dashboard" className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#1e293b] p-2 shadow-lg border border-white/10">
                            <img
                                src={`${import.meta.env.BASE_URL}logo.png`}
                                alt="InnovateTech Logo"
                                className={`w-full h-full object-contain transition-transform duration-1000 ${logoRotate ? 'rotate-[360deg]' : ''
                                    }`}
                            />
                        </div>
                        <span className={`hidden text-xl font-bold sm:inline-block ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>
                            InnovateTech RH
                        </span>
                    </Link>
                    <nav className="flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className={cn(
                                    'flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all',
                                    location.pathname === item.href
                                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                        : theme === 'dark'
                                            ? 'text-slate-400 hover:bg-white/5 hover:text-white'
                                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                )}
                            >
                                <item.icon className="h-5 w-5 mx-auto sm:mx-0" />
                                <span className="hidden sm:inline-block whitespace-nowrap">{t(item.labelKey)}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-3">
                    <LanguageSelector />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        title={theme === 'dark' ? t('switchToLight') : t('switchToDark')}
                    >
                        {theme === 'dark' ? (
                            <Sun className="h-5 w-5 text-yellow-400" />
                        ) : (
                            <Moon className="h-5 w-5 text-indigo-600" />
                        )}
                    </Button>
                    {user && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleSignOut}
                            className="gap-2"
                        >
                            <LogOut className="h-4 w-4" />
                            <span className="hidden sm:inline-block">{t('logout')}</span>
                        </Button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
