import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearError } from '../features/auth/authSlice';
import { Lock, Mail, LogIn, AlertCircle, Building2, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '../components/ui/Button';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, isAuthenticated } = useSelector(state => state.auth);
    const { t, dir } = useLanguage();
    const { theme } = useTheme();
    const [logoRotate, setLogoRotate] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        if (isAuthenticated) {
            setLogoRotate(true);
            setTimeout(() => {
                navigate('/loading');
            }, 800);
        }
    }, [isAuthenticated, navigate]);

    useEffect(() => {
        return () => {
            dispatch(clearError());
        };
    }, [dispatch]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginUser(formData));
    };

    return (
        <div className={`min-h-screen flex items-center justify-center p-4 relative overflow-hidden ${theme === 'dark' ? 'bg-[#020817]' : 'bg-gray-50'}`} dir={dir}>
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="w-full max-w-md relative z-10">
                <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl mb-4 shadow-2xl border transition-transform duration-700 ${logoRotate ? 'rotate-[360deg] scale-110' : ''} ${theme === 'dark' ? 'bg-[#1e293b] border-white/10' : 'bg-white border-gray-200'}`}>
                        <img
                            src={`${import.meta.env.BASE_URL}logo.png`}
                            alt="InnovateTech Logo"
                            className="w-16 h-16 object-contain"
                        />
                    </div>
                    <h1 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        InnovateTech RH
                    </h1>
                    <p className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                        {t('loginTitle')}
                    </p>
                </div>

                <div className="bg-[#0f172a] rounded-2xl border border-white/10 p-8 shadow-2xl backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-medium text-red-400">{error}</p>
                                </div>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className={`text-sm font-medium flex items-center gap-2 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                                <Mail className="w-4 h-4 text-cyan-400" />
                                {t('emailLabel')}
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="votre.email@innovatetech.ma"
                                className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className={`text-sm font-medium flex items-center gap-2 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                                <Lock className="w-4 h-4 text-cyan-400" />
                                {t('passwordLabel')}
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder={t('passwordPlaceholder')}
                                className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                required
                            />
                        </div>

                        <Button type="submit" disabled={loading} className="w-full gap-2">
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    {t('loggingIn')}
                                </>
                            ) : (
                                <>
                                    <LogIn className="w-5 h-5" />
                                    {t('loginButton')}
                                </>
                            )}
                        </Button>
                    </form>
                </div>

                <div className="text-center mt-6">
                    <Link to="/" className={`text-sm transition-colors ${theme === 'dark' ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}>
                        {dir === 'rtl' ? '→ ' : '← '}{t('backToHome')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
