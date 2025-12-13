import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, updateEmployee } from '../features/employees/employeeSlice';
import { ArrowLeft, Edit, Archive, Mail, Phone, Briefcase, Building2, Calendar, DollarSign, RefreshCw } from 'lucide-react';
import { calculateSeniority } from '../utils/helpers';
import toast from 'react-hot-toast';
import { Button } from '../components/ui/Button';
import { useTheme } from '../contexts/ThemeContext';

const EmployeeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { list } = useSelector(state => state.employees);
    const { theme } = useTheme();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        if (list.length === 0) {
            dispatch(fetchEmployees());
        } else {
            const emp = list.find(e => e.id === id);
            setEmployee(emp);
        }
    }, [id, list, dispatch]);

    const handleArchive = async () => {
        toast((t) => (
            <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center">
                        <Archive className="w-5 h-5 text-orange-400" />
                    </div>
                    <div className="flex-1">
                        <p className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Archiver l'employé ?</p>
                        <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>L'employé sera déplacé vers les archives et ne sera plus visible dans la liste active.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button
                        variant="destructive"
                        onClick={async () => {
                            try {
                                await dispatch(updateEmployee({
                                    id,
                                    data: { ...employee, status: 'Archived' }
                                })).unwrap();
                                toast.dismiss(t.id);
                                toast.success('✓ Employé archivé avec succès', {
                                    style: {
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        border: '1px solid rgba(16, 185, 129, 0.3)',
                                    },
                                });
                                navigate('/employees');
                            } catch (error) {
                                toast.error('Erreur lors de l\'archivage');
                            }
                        }}
                        className="flex-1"
                    >
                        Archiver
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => toast.dismiss(t.id)}
                        className="flex-1"
                    >
                        Annuler
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

    const handleUnarchive = async () => {
        toast((t) => (
            <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center">
                        <RefreshCw className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                        <p className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Restaurer l'employé ?</p>
                        <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>L'employé redeviendra actif et sera visible dans la liste principale.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button
                        variant="success"
                        onClick={async () => {
                            try {
                                await dispatch(updateEmployee({
                                    id,
                                    data: { ...employee, status: 'Active' }
                                })).unwrap();
                                toast.dismiss(t.id);
                                toast.success('✓ Employé restauré avec succès', {
                                    style: {
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        border: '1px solid rgba(16, 185, 129, 0.3)',
                                    },
                                });
                                navigate('/employees');
                            } catch (error) {
                                toast.error('Erreur lors de la restauration');
                            }
                        }}
                        className="flex-1"
                    >
                        Restaurer
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => toast.dismiss(t.id)}
                        className="flex-1"
                    >
                        Annuler
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

    if (!employee) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    const deptColors = {
        'IT': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        'RH': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
        'Finance': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        'Marketing': 'bg-red-500/10 text-red-400 border-red-500/20',
        'Commercial': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
        'Production': 'bg-green-500/10 text-green-400 border-green-500/20',
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <Link
                to="/employees"
                className={`inline-flex items-center gap-2 transition-colors group ${theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Retour à l'annuaire
            </Link>

            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-3xl font-bold border-4 border-white/30">
                            {employee.prenom[0]}{employee.nom[0]}
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">
                                {employee.prenom} {employee.nom}
                            </h1>
                            <p className="text-cyan-100 text-lg">{employee.poste}</p>
                            <p className="text-cyan-200 text-sm mt-1">{employee.matricule}</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Button asChild>
                            <Link to={`/employees/edit/${employee.id}`} className="gap-2">
                                <Edit className="w-5 h-5" />
                                Modifier
                            </Link>
                        </Button>
                        {employee.status === 'Archived' ? (
                            <Button variant="success" onClick={handleUnarchive} className="gap-2">
                                <RefreshCw className="w-5 h-5" />
                                Restaurer
                            </Button>
                        ) : (
                            <Button variant="destructive" onClick={handleArchive} className="gap-2">
                                <Archive className="w-5 h-5" />
                                Archiver
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className={`rounded-2xl border p-6 shadow-xl transition-all ${theme === 'dark' ? 'bg-[#0f172a] border-white/5 hover:border-white/10' : 'bg-white border-gray-200 hover:border-gray-300'}`}>
                    <h2 className={`text-xl font-bold mb-6 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        <Mail className="w-5 h-5 text-cyan-400" />
                        Informations Personnelles
                    </h2>
                    <div className="space-y-4">
                        <div className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'}`}>
                            <Mail className={`w-5 h-5 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                            <div>
                                <p className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}`}>Email</p>
                                <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{employee.email}</p>
                            </div>
                        </div>
                        {employee.telephone && (
                            <div className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'}`}>
                                <Phone className={`w-5 h-5 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                                <div>
                                    <p className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}`}>Téléphone</p>
                                    <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{employee.telephone}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className={`rounded-2xl border p-6 shadow-xl transition-all ${theme === 'dark' ? 'bg-[#0f172a] border-white/5 hover:border-white/10' : 'bg-white border-gray-200 hover:border-gray-300'}`}>
                    <h2 className={`text-xl font-bold mb-6 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        <Briefcase className="w-5 h-5 text-blue-400" />
                        Informations Professionnelles
                    </h2>
                    <div className="space-y-4">
                        <div className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'}`}>
                            <Building2 className={`w-5 h-5 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                            <div className="flex-1">
                                <p className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}`}>Département</p>
                                <span className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-medium border ${deptColors[employee.departement]}`}>
                                    {employee.departement}
                                </span>
                            </div>
                        </div>
                        <div className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'}`}>
                            <Briefcase className={`w-5 h-5 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                            <div>
                                <p className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}`}>Poste</p>
                                <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{employee.poste}</p>
                            </div>
                        </div>
                        <div className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'}`}>
                            <Calendar className={`w-5 h-5 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                            <div>
                                <p className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}`}>Date d'embauche</p>
                                <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                    {new Date(employee.dateEmbauche).toLocaleDateString('fr-FR', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </p>
                            </div>
                        </div>
                        <div className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'}`}>
                            <DollarSign className={`w-5 h-5 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                            <div>
                                <p className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}`}>Salaire</p>
                                <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                    {Number(employee.salaire).toLocaleString('fr-MA')} MAD
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`rounded-2xl p-8 shadow-xl border ${theme === 'dark' ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20' : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200'}`}>
                <div className="text-center">
                    <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>Ancienneté</h3>
                    <p className="text-4xl font-bold text-blue-400">
                        {calculateSeniority(employee.dateEmbauche)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetails;
