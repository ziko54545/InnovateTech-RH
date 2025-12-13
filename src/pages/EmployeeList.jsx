import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search, Plus, Trash2, Edit, Filter, MoreVertical, Download, ChevronUp, Eye, Archive, ArchiveRestore } from 'lucide-react';
import { updateEmployee, deleteEmployee, fetchEmployees } from '../features/employees/employeeSlice';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { calculateSeniority } from '../utils/helpers';
import { Button } from '../components/ui/Button';
import toast from 'react-hot-toast';
import { exportEmployeesToPDF } from '../utils/pdfExport';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const EmployeeList = () => {
    const dispatch = useDispatch();
    const { list: employees, loading, error } = useSelector((state) => state.employees);
    const { t, dir } = useLanguage();
    const { theme } = useTheme();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterDept, setFilterDept] = useState('All');
    const [showArchived, setShowArchived] = useState(false);

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    const handleArchive = (id) => {
        toast((toastInstance) => (
            <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-500/20 border border-amber-500/30 rounded-full flex items-center justify-center">
                        <Archive className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="flex-1">
                        <p className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            {t('archiveConfirm')}
                        </p>
                        <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                            {t('archiveMessage')}
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button
                        variant="destructive"
                        onClick={async () => {
                            try {
                                await dispatch(updateEmployee({ id, data: { status: 'Archived' } })).unwrap();
                                toast.dismiss(toastInstance.id);
                                toast.success(t('archiveSuccess'), {
                                    style: {
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        border: '1px solid rgba(16, 185, 129, 0.3)',
                                    },
                                });
                            } catch (error) {
                                toast.error(t('error') || "Erreur lors de l'archivage");
                            }
                        }}
                        className="flex-1"
                    >
                        {t('archive')}
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => toast.dismiss(toastInstance.id)}
                        className="flex-1"
                    >
                        {t('cancel')}
                    </Button>
                </div>
            </div>
        ), {
            duration: Infinity,
            style: {
                maxWidth: '500px',
                padding: '20px',
            },
        });
    };

    const handleDelete = (id) => {
        toast((toastInstance) => (
            <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-500/20 border border-red-500/30 rounded-full flex items-center justify-center">
                        <Trash2 className="w-5 h-5 text-red-400" />
                    </div>
                    <div className="flex-1">
                        <p className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            {t('deleteConfirm')}
                        </p>
                        <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                            {t('deleteMessage')}
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button
                        variant="destructive"
                        onClick={async () => {
                            try {
                                await dispatch(deleteEmployee(String(id))).unwrap();
                                toast.dismiss(toastInstance.id);
                                toast.success(t('deleteSuccess'), {
                                    style: {
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        border: '1px solid rgba(16, 185, 129, 0.3)',
                                    },
                                });
                            } catch (error) {
                                toast.error(t('error') || "Erreur lors de la suppression");
                            }
                        }}
                        className="flex-1"
                    >
                        {t('delete')}
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => toast.dismiss(toastInstance.id)}
                        className="flex-1"
                    >
                        {t('cancel')}
                    </Button>
                </div>
            </div>
        ), {
            duration: Infinity,
            style: {
                maxWidth: '500px',
                padding: '20px',
            },
        });
    };

    const handleExportPDF = () => {
        exportEmployeesToPDF(filteredEmployees);
    };

    const normalizeString = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    const filteredEmployees = employees.filter(emp => {
        const matchesSearch =
            normalizeString(emp.nom).includes(normalizeString(searchTerm)) ||
            normalizeString(emp.prenom).includes(normalizeString(searchTerm)) ||
            normalizeString(emp.matricule).includes(normalizeString(searchTerm));
        const matchesFilter = filterDept === 'All' || emp.departement === filterDept;
        const matchesArchiveFilter = showArchived ? emp.status === 'Archived' : emp.status !== 'Archived';
        return matchesSearch && matchesFilter && matchesArchiveFilter;
    });

    const departments = ['IT', 'RH', 'Finance', 'Marketing', 'Commercial', 'Production'];

    return (
        <div className="space-y-8 animate-in fade-in duration-500" dir={dir}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h2 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {t('employeeListTitle')}
                    </h2>
                    <p className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                        {t('employeeListSubtitle')}
                    </p>
                </div>
                <Link
                    to="/employees/new"
                    className="group bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 font-semibold hover:scale-105 transform"
                >
                    <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                    <span>{t('addEmployee')}</span>
                </Link>
            </div>

            {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
                    {error}
                </div>
            )}

            <div className={`p-4 rounded-2xl border flex flex-col md:flex-row gap-4 shadow-xl ${theme === 'dark' ? 'bg-[#0f172a] border-white/5' : 'bg-white border-gray-200'}`}>
                <div className="relative flex-1">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                        type="text"
                        placeholder={t('searchPlaceholder')}
                        className={`w-full border rounded-xl pl-10 pr-4 py-3 focus:outline-none transition-all ${theme === 'dark' ? 'bg-[#1e293b] border-white/10 text-white focus:border-cyan-500/50 focus:bg-[#1e293b]/80 placeholder-slate-500' : 'bg-white border-gray-300 text-gray-900 focus:border-cyan-500 focus:bg-gray-50 placeholder-gray-400'}`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-4">
                    <div className="relative w-full md:w-64">
                        <Filter className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                        <select
                            className={`w-full border rounded-xl pl-10 pr-10 py-3 appearance-none focus:outline-none cursor-pointer ${theme === 'dark' ? 'bg-[#1e293b] border-white/10 text-white focus:border-cyan-500/50' : 'bg-white border-gray-300 text-gray-900 focus:border-cyan-500'}`}
                            value={filterDept}
                            onChange={(e) => setFilterDept(e.target.value)}
                        >
                            <option value="All">{t('filterDept')}</option>
                            {departments.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                        <ChevronUp className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 rotate-180 text-slate-500 pointer-events-none" />
                    </div>
                    <Button variant="outline" size="icon" onClick={handleExportPDF} title="Télécharger PDF">
                        <Download className="w-5 h-5" />
                    </Button>
                    <Button
                        variant={showArchived ? "destructive" : "outline"}
                        onClick={() => setShowArchived(!showArchived)}
                        className="gap-2"
                    >
                        {showArchived ? (
                            <>
                                <Eye className="w-4 h-4" />
                                {t('showActive') || 'Voir actifs'}
                            </>
                        ) : (
                            <>
                                <ArchiveRestore className="w-4 h-4" />
                                {t('showArchived') || 'Voir archives'}
                            </>
                        )}
                    </Button>
                </div>
            </div>

            <div className={`rounded-2xl border overflow-hidden shadow-xl ${theme === 'dark' ? 'bg-[#0f172a] border-white/5' : 'bg-white border-gray-200'}`}>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className={`text-xs uppercase tracking-wider font-semibold border-b ${theme === 'dark' ? 'bg-[#1e293b]/50 text-slate-400 border-white/5' : 'bg-gray-50 text-gray-500 border-gray-200'}`}>
                                <th className="p-5">{t('employee') || 'Employé'}</th>
                                <th className="p-5">{t('position') || 'Poste'}</th>
                                <th className="p-5">{t('department') || 'Département'}</th>
                                <th className="p-5">{t('status') || 'Statut'}</th>
                                <th className="p-5">{t('seniority') || 'Ancienneté'}</th>
                                <th className={`p-5 ${dir === 'rtl' ? 'text-left' : 'text-right'}`}>
                                    {t('actions')}
                                </th>
                            </tr>
                        </thead>
                        <tbody className={`divide-y ${theme === 'dark' ? 'divide-white/5' : 'divide-gray-100'}`}>
                            {filteredEmployees.map((emp) => (
                                <tr key={emp.id} className={`transition-all group ${emp.status === 'Archived' ? 'opacity-60 blur-[1px] grayscale hover:blur-0 hover:grayscale-0 hover:opacity-100' : ''} ${theme === 'dark' ? 'hover:bg-white/[0.02]' : 'hover:bg-gray-50'}`}>
                                    <td className="p-5">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border flex items-center justify-center text-cyan-400 font-bold text-sm ${theme === 'dark' ? 'border-blue-500/10' : 'border-blue-200'}`}>
                                                {emp.nom[0]}{emp.prenom[0]}
                                            </div>
                                            <div>
                                                <Link
                                                    to={`/employees/${emp.id}`}
                                                    className={`font-medium hover:text-cyan-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                                                >
                                                    {emp.nom} {emp.prenom}
                                                </Link>
                                                <div className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}`}>{emp.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={`p-5 text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>{emp.poste}</td>
                                    <td className="p-5">
                                        <span className={clsx("text-xs px-2.5 py-1 rounded-full font-medium border",
                                            emp.departement === 'IT' && "text-cyan-400 border-cyan-400/20 bg-cyan-400/10",
                                            emp.departement === 'RH' && "text-pink-400 border-pink-400/20 bg-pink-400/10",
                                            emp.departement === 'Finance' && "text-emerald-400 border-emerald-400/20 bg-emerald-400/10",
                                            emp.departement === 'Marketing' && "text-purple-400 border-purple-400/20 bg-purple-400/10",
                                            emp.departement === 'Commercial' && "text-amber-400 border-amber-400/20 bg-amber-400/10",
                                            emp.departement === 'Production' && "text-slate-400 border-slate-400/20 bg-slate-400/10",
                                        )}>
                                            {emp.departement}
                                        </span>
                                    </td>
                                    <td className="p-5">
                                        <div className="flex items-center gap-2">
                                            {emp.status === 'Archived' ? (
                                                <>
                                                    <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                                                    <span className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                                                        {t('archived')}
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                                    <span className="text-sm text-emerald-400">{t('active')}</span>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                    <td className={`p-5 text-sm font-mono ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                                        {calculateSeniority(emp.dateEmbauche)}
                                    </td>
                                    <td className={`p-5 ${dir === 'rtl' ? 'text-left' : 'text-right'}`}>
                                        <div className={`flex items-center gap-2 ${dir === 'rtl' ? 'justify-start' : 'justify-end'}`}>
                                            <Button variant="ghost" size="icon" asChild>
                                                <Link to={`/employees/${emp.id}`} title={t('details')}>
                                                    <Eye className="w-4 h-4" />
                                                </Link>
                                            </Button>
                                            <Button variant="ghost" size="icon" asChild>
                                                <Link to={`/employees/edit/${emp.id}`} title={t('edit')}>
                                                    <Edit className="w-4 h-4" />
                                                </Link>
                                            </Button>
                                            {emp.status !== 'Archived' && (
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => handleArchive(emp.id)}
                                                    title={t('archive')}
                                                    className="hover:text-amber-400 hover:bg-amber-400/10"
                                                >
                                                    <Archive className="w-4 h-4" />
                                                </Button>
                                            )}
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => handleDelete(emp.id)}
                                                title={t('delete')}
                                                className="hover:text-red-400 hover:bg-red-400/10"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {filteredEmployees.length === 0 && (
                        <div className="p-12 text-center">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${theme === 'dark' ? 'bg-slate-800/50' : 'bg-gray-100'}`}>
                                <Search className={`w-8 h-8 ${theme === 'dark' ? 'text-slate-600' : 'text-gray-400'}`} />
                            </div>
                            <h3 className={`font-medium mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                {t('noEmployees')}
                            </h3>
                            <p className={theme === 'dark' ? 'text-slate-500' : 'text-gray-600'}>
                                {t('searchPlaceholder')}
                            </p>
                        </div>
                    )}
                </div>
                <div className={`px-6 py-4 border-t flex items-center justify-between text-sm ${theme === 'dark' ? 'border-white/5 text-slate-500' : 'border-gray-200 text-gray-600'}`}>
                    <div>{t('showing')} {filteredEmployees.length} {t('employees').toLowerCase()}</div>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="sm" disabled>
                            {t('prev')}
                        </Button>
                        <Button variant="ghost" size="sm" disabled>
                            {t('next')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeList;
