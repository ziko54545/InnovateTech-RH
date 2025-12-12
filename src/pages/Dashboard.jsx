import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees } from '../features/employees/employeeSlice';
import { Users, CreditCard, TrendingUp, Calendar, Building2 } from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { list, loading } = useSelector((state) => state.employees);
    const { t, dir } = useLanguage();
    const { theme } = useTheme();

    useEffect(() => {
        if (list.length === 0) {
            dispatch(fetchEmployees());
        }
    }, [dispatch, list.length]);

    const activeEmployees = list.filter(emp => emp.status !== 'Archived');

    const totalEmployees = activeEmployees.length;
    const totalPayroll = activeEmployees.reduce((acc, emp) => acc + Number(emp.salaire), 0);
    const avgSalary = totalEmployees > 0 ? (totalPayroll / totalEmployees).toFixed(0) : 0;

    const currentMonth = new Date().getMonth() + 1;
    const anniversaries = activeEmployees.filter(emp => {
        const hireMonth = new Date(emp.dateEmbauche).getMonth() + 1;
        return hireMonth === currentMonth;
    });

    const deptData = activeEmployees.reduce((acc, emp) => {
        acc[emp.departement] = (acc[emp.departement] || 0) + 1;
        return acc;
    }, {});

    const donutData = Object.keys(deptData).map(dept => ({
        name: dept,
        value: deptData[dept]
    }));

    const hiringByYear = list.reduce((acc, emp) => {
        const year = new Date(emp.dateEmbauche).getFullYear();
        acc[year] = (acc[year] || 0) + 1;
        return acc;
    }, {});

    const hiringData = Object.keys(hiringByYear)
        .sort()
        .map(year => ({
            year: year,
            hires: hiringByYear[year]
        }));

    const COLORS = {
        'IT': '#3b82f6',
        'Commercial': '#06b6d4',
        'RH': '#f59e0b',
        'Finance': '#8b5cf6',
        'Marketing': '#ef4444',
        'Production': '#10b981'
    };

    const deptColorsBadge = {
        'IT': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        'RH': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
        'Finance': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        'Marketing': 'bg-red-500/10 text-red-400 border-red-500/20',
        'Commercial': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
        'Production': 'bg-green-500/10 text-green-400 border-green-500/20',
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500" dir={dir}>
            <div>
                <h2 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {t('dashboardTitle')}
                </h2>
                <p className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                    {t('dashboardSubtitle')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title={t('statsTotal')}
                    value={totalEmployees}
                    icon={Users}
                    trend={t('trendLastMonth')}
                    color="cyan"
                />
                <StatCard
                    title={t('statsPayroll')}
                    value={`${(totalPayroll / 1000).toFixed(1)}k MAD`}
                    icon={CreditCard}
                    trend={t('trendStable')}
                    color="blue"
                />
                <StatCard
                    title={t('statsAvgSalary')}
                    value={`${(avgSalary / 1000).toFixed(1)}k MAD`}
                    icon={TrendingUp}
                    trend={t('trendInflation')}
                    color="purple"
                />
                <StatCard
                    title={t('statsAnniversaries')}
                    value={anniversaries.length}
                    icon={Calendar}
                    trend={t('trendThisMonth')}
                    color="pink"
                />
            </div>

            {donutData.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className={`rounded-2xl border p-6 shadow-xl transition-all ${theme === 'dark' ? 'bg-[#0f172a] border-white/5 hover:border-white/10' : 'bg-white border-gray-200 hover:border-gray-300'}`}>
                        <h3 className={`text-lg font-bold mb-6 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            <Building2 className="w-5 h-5 text-blue-400" />
                            {t('deptDistribution') || 'Répartition par Département'}
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={donutData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {donutData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[entry.name] || '#8884d8'} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                                        border: theme === 'dark' ? '1px solid #334155' : '1px solid #e5e7eb',
                                        borderRadius: '8px',
                                        color: theme === 'dark' ? '#ffffff' : '#000000'
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {hiringData.length > 0 && (
                        <div className={`rounded-2xl border p-6 shadow-xl transition-all ${theme === 'dark' ? 'bg-[#0f172a] border-white/5 hover:border-white/10' : 'bg-white border-gray-200 hover:border-gray-300'}`}>
                            <h3 className={`text-lg font-bold mb-6 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                <TrendingUp className="w-5 h-5 text-purple-400" />
                                {t('hiringTimeline') || 'Évolution des Embauches'}
                            </h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart data={hiringData}>
                                    <defs>
                                        <linearGradient id="colorHires" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#334155' : '#e5e7eb'} />
                                    <XAxis
                                        dataKey="year"
                                        stroke={theme === 'dark' ? '#94a3b8' : '#6b7280'}
                                        tick={{ fill: theme === 'dark' ? '#94a3b8' : '#6b7280' }}
                                    />
                                    <YAxis
                                        stroke={theme === 'dark' ? '#94a3b8' : '#6b7280'}
                                        tick={{ fill: theme === 'dark' ? '#94a3b8' : '#6b7280' }}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                                            border: theme === 'dark' ? '1px solid #334155' : '1px solid #e5e7eb',
                                            borderRadius: '8px',
                                            color: theme === 'dark' ? '#ffffff' : '#000000'
                                        }}
                                    />
                                    <Legend
                                        wrapperStyle={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="hires"
                                        stroke="#8b5cf6"
                                        fillOpacity={1}
                                        fill="url(#colorHires)"
                                        name={t('hires') || 'Embauches'}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </div>
            )}

            <div className={`rounded-2xl border p-6 shadow-xl transition-all ${theme === 'dark' ? 'bg-[#0f172a] border-white/5 hover:border-white/10' : 'bg-white border-gray-200 hover:border-gray-300'}`}>
                <h3 className={`text-lg font-bold mb-6 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    <Calendar className="w-5 h-5 text-orange-400" />
                    {t('anniversariesTitle')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {anniversaries.length > 0 ? (
                        anniversaries.map(emp => (
                            <div key={emp.id} className={`flex items-center gap-4 p-4 rounded-xl transition-colors group border ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-gray-50 hover:bg-gray-100 border-gray-200'}`}>
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-white font-bold text-sm shadow-md">
                                    {emp.prenom[0]}{emp.nom[0]}
                                </div>
                                <div className="flex-1">
                                    <div className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                        {emp.prenom} {emp.nom}
                                    </div>
                                    <div className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                                        {new Date().getFullYear() - new Date(emp.dateEmbauche).getFullYear()} {t('years')}
                                    </div>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${deptColorsBadge[emp.departement]}`}>
                                    {emp.departement}
                                </span>
                            </div>
                        ))
                    ) : (
                        <div className={`col-span-full text-center py-8 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                            {t('noAnniversaries')}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
