import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { LayoutDashboard, Users, LogOut, ChevronLeft, ChevronRight, Building2 } from 'lucide-react';
import { Button } from '../ui/Button';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const menuItems = [
        { path: '/dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
        { path: '/employees', label: 'Employés', icon: Users },
    ];

    const handleLogout = () => {
        if (window.confirm('Voulez-vous vraiment vous déconnecter ?')) {
            dispatch(logout());
            navigate('/login');
        }
    };

    return (
        <aside className={`h-screen bg-[#020817] border-r border-white/5 transition-all duration-300 flex flex-col relative z-20 ${collapsed ? 'w-20' : 'w-64'}`}>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setCollapsed(!collapsed)}
                className="absolute -right-3 top-6 bg-[#1e293b] border border-white/10 rounded-full p-1"
                title="Toggle sidebar"
            >
                {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </Button>

            {/* Logo */}
            <div className={`p-6 flex items-center ${collapsed ? 'justify-center' : 'gap-3'} border-b border-white/5 mb-6`}>
                <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex-shrink-0">
                    <Building2 className="w-5 h-5 text-white" />
                </div>
                {!collapsed && (
                    <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 whitespace-nowrap">
                        InnovateTech
                    </span>
                )}
            </div>

            {/* Menu */}
            <nav className="flex-1 px-3 space-y-2">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `
                            flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group relative overflow-hidden
                            ${isActive
                                ? 'bg-gradient-to-r from-cyan-500/10 to-blue-600/10 text-cyan-400 border border-blue-500/20'
                                : 'text-slate-400 hover:bg-white/5 hover:text-white'
                            }
                            ${collapsed ? 'justify-center' : ''}
                        `}
                    >
                        {({ isActive }) => (
                            <>
                                {isActive && <div className="absolute left-0 top-0 w-1 h-full bg-cyan-500 rounded-r-full" />}
                                <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-white'}`} />
                                {!collapsed && <span className="font-medium">{item.label}</span>}
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* Footer / Logout */}
            <div className="p-4 mt-auto border-t border-white/5">
                <Button
                    variant="ghost"
                    onClick={handleLogout}
                    className={`w-full px-3 py-3 ${collapsed ? 'justify-center' : 'justify-start'} gap-3 hover:text-red-400 hover:bg-red-500/10`}
                >
                    <LogOut className="w-5 h-5" />
                    {!collapsed && <span className="font-medium">Déconnexion</span>}
                </Button>
            </div>
        </aside>
    );
};

export default Sidebar;
