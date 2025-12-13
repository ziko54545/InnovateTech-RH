import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingTransition = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/dashboard');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#020817] via-[#0a1628] to-[#020817] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-36 h-36 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl mb-8 shadow-2xl border border-white/20 animate-spin-slow">
                    <img
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        alt="InnovateTech Logo"
                        className="w-24 h-24 object-contain"
                    />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2 animate-pulse">Bienvenue</h2>
                <p className="text-slate-400">Chargement de votre espace...</p>
            </div>
        </div>
    );
};

export default LoadingTransition;
