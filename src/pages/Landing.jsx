import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Shield, Zap, BarChart3, CheckCircle, Star, TrendingUp, Mail, Phone, MapPin, Menu, X } from 'lucide-react';
import { Button } from '../components/ui/Button';

const Landing = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const features = [
        {
            icon: Users,
            title: 'Gestion Employés',
            description: 'Interface intuitive pour gérer tous vos employés en un clic'
        },
        {
            icon: BarChart3,
            title: 'Statistiques RH',
            description: 'Visualisez vos données RH avec des graphiques interactifs'
        },
        {
            icon: Shield,
            title: 'Sécurisé',
            description: 'Vos données sont chiffrées et protégées 24/7'
        },
        {
            icon: Zap,
            title: 'Ultra Rapide',
            description: 'Performance optimale et chargement instantané'
        }
    ];

    const services = [
        {
            title: 'Gestion des Employés',
            description: 'Centralisez toutes les informations de vos employés dans un seul système sécurisé et accessible.',
            features: ['Profils détaillés', 'Gestion des documents', 'Suivi des performances']
        },
        {
            title: 'Calcul Automatique',
            description: 'Automatisez les calculs d\'ancienneté, congés et autres métriques RH importantes.',
            features: ['Ancienneté précise', 'Congés automatiques', 'Rapports en temps réel']
        },
        {
            title: 'Rapports & Analytics',
            description: 'Obtenez des insights précieux sur votre capital humain avec des tableaux de bord interactifs.',
            features: ['Graphiques interactifs', 'Export PDF/Excel', 'Tableaux de bord personnalisés']
        }
    ];

    const benefits = [
        'Gestion complète des employés',
        'Calcul automatique de l\'ancienneté',
        'Export PDF professionnel',
        'Statistiques en temps réel',
        'Interface responsive',
        'Support technique 24/7'
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#020817] via-[#0a1628] to-[#020817] text-white overflow-hidden relative">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

            {/* Animated Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/80 backdrop-blur-lg border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="h-12 w-12 bg-[#1e293b] rounded-xl p-2 border border-white/10">
                                <img src={`${import.meta.env.BASE_URL}logo.png`} alt="InnovateTech" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-xl font-bold">InnovateTech RH</span>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            <Button variant="ghost" size="sm" onClick={() => scrollToSection('home')}>Accueil</Button>
                            <Button variant="ghost" size="sm" onClick={() => scrollToSection('services')}>Services</Button>
                            <Button variant="ghost" size="sm" onClick={() => scrollToSection('contact')}>Contact</Button>
                            <Button asChild>
                                <Link to="/login">Connexion</Link>
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-white/5">
                            <div className="flex flex-col gap-4">
                                <Button variant="ghost" className="text-left py-2" onClick={() => scrollToSection('home')}>Accueil</Button>
                                <Button variant="ghost" className="text-left py-2" onClick={() => scrollToSection('services')}>Services</Button>
                                <Button variant="ghost" className="text-left py-2" onClick={() => scrollToSection('contact')}>Contact</Button>
                                <Button asChild>
                                    <Link to="/login" className="text-center">Connexion</Link>
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Content */}
            <div className="relative z-10 pt-20">
                {/* Hero Section - Home */}
                <section id="home" className="py-32">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-5xl mx-auto">
                            {/* Logo */}
                            <div className="flex justify-center mb-8">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                    <div className="relative bg-[#1e293b] p-4 rounded-2xl shadow-2xl border border-white/10">
                                        <img
                                            src={`${import.meta.env.BASE_URL}logo.png`}
                                            alt="InnovateTech Logo"
                                            className="w-20 h-20 object-contain"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 backdrop-blur-sm">
                                <Star className="w-4 h-4 fill-current" />
                                <span>Solution RH N°1 au Maroc</span>
                            </div>

                            {/* Main Title */}
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
                                <span className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
                                    InnovateTech
                                </span>
                                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                                    Ressources Humaines
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-300 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 max-w-3xl mx-auto leading-relaxed">
                                La plateforme de gestion RH moderne qui transforme votre département en un centre d'excellence
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                                <Link
                                    to="/login"
                                    className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all hover:scale-110 transform flex items-center gap-3 overflow-hidden"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    <span className="relative flex items-center gap-3">
                                        <span>Démarrer Maintenant</span>
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                    </span>
                                </Link>

                                <Button variant="outline" size="lg" onClick={() => scrollToSection('services')} className="group gap-2">
                                    <span>Découvrir</span>
                                    <TrendingUp className="w-5 h-5" />
                                </Button>
                            </div>

                            {/* Benefits List */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto animate-in fade-in zoom-in duration-700 delay-400">
                                {benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 hover:border-cyan-500/30 transition-all"
                                    >
                                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                        <span className="text-sm text-slate-300">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-24 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                Fonctionnalités Premium
                            </h2>
                            <p className="text-slate-400 text-lg">
                                Tout ce dont vous avez besoin pour gérer votre équipe
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all hover:scale-105 transform hover:-translate-y-3 duration-300"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>

                                    <div className="relative">
                                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg shadow-cyan-500/50">
                                            <feature.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                                        <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                Nos Services
                            </h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                                Des solutions complètes pour optimiser la gestion de vos ressources humaines
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all hover:scale-105 transform"
                                >
                                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-slate-400 mb-6">{service.description}</p>
                                    <ul className="space-y-3">
                                        {service.features.map((feat, i) => (
                                            <li key={i} className="flex items-center gap-2 text-slate-300">
                                                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                { number: '500+', label: 'Employés Gérés', icon: Users },
                                { number: '99.9%', label: 'Uptime Garanti', icon: Shield },
                                { number: '24/7', label: 'Support Dédié', icon: Zap }
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="group relative text-center p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl hover:border-cyan-500/50 transition-all hover:scale-105 transform"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative">
                                        <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                                        <div className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                                            {stat.number}
                                        </div>
                                        <div className="text-slate-400 font-medium">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-24 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                Contactez-Nous
                            </h2>
                            <p className="text-slate-400 text-lg">
                                Notre équipe est là pour répondre à vos questions
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all hover:scale-105">
                                <Mail className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                                <p className="text-slate-400">contact@innovatetech.ma</p>
                            </div>

                            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all hover:scale-105">
                                <Phone className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-white mb-2">Téléphone</h3>
                                <p className="text-slate-400">+212 5XX-XXXXXX</p>
                            </div>

                            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all hover:scale-105">
                                <MapPin className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-white mb-2">Adresse</h3>
                                <p className="text-slate-400">Casablanca, Maroc</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                                Prêt à Révolutionner Votre RH ?
                            </h2>
                            <p className="text-xl text-slate-300 mb-10">
                                Rejoignez des centaines d'entreprises qui font confiance à InnovateTech
                            </p>
                            <Link
                                to="/login"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all hover:scale-110 transform"
                            >
                                <span>Commencer Gratuitement</span>
                                <ArrowRight className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5">
                    <p>© 2025 InnovateTech RH - Casablanca, Maroc</p>
                </footer>
            </div>
        </div>
    );
};

export default Landing;
