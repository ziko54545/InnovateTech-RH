import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, updateEmployee, fetchEmployees } from '../features/employees/employeeSlice';
import { ArrowLeft, Save, UserPlus, Upload, Building2, User } from 'lucide-react';
import { generateMatricule } from '../utils/helpers';
import { Button } from '../components/ui/Button';

const EmployeeForm = () => {
    const { id } = useParams();
    const isEdit = !!id;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { list } = useSelector(state => state.employees);

    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        email: '',
        telephone: '',
        poste: '',
        departement: 'IT',
        salaire: 0,
        dateEmbauche: new Date().toISOString().split('T')[0],
    });

    useEffect(() => {
        if (isEdit) {
            const employee = list.find(e => e.id === id);
            if (employee) {
                setFormData(employee);
            } else {
                dispatch(fetchEmployees());
            }
        }
    }, [id, list, isEdit, dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEdit) {
                await dispatch(updateEmployee({ id, data: formData })).unwrap();
            } else {
                const newEmp = {
                    ...formData,
                    matricule: generateMatricule(),
                    status: 'Active'
                };
                await dispatch(addEmployee(newEmp)).unwrap();
            }
            navigate('/employees');
        } catch (error) {
            alert('Erreur lors de l\'enregistrement: ' + error);
        }
    };

    const inputWrapperClasses = "space-y-2";
    const labelClasses = "text-sm font-medium text-slate-300";
    const inputClasses = "w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-slate-500";

    return (
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
            <Link to="/employees" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-8 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Retour à l'annuaire
            </Link>

            <div className="bg-[#0f172a] rounded-2xl border border-white/5 p-8 shadow-2xl">
                <div className="flex items-center gap-5 mb-8 border-b border-white/5 pb-8">
                    <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-blue-500/10 rounded-2xl shadow-inner">
                        {isEdit ? <Save className="w-8 h-8 text-cyan-400" /> : <UserPlus className="w-8 h-8 text-cyan-400" />}
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-1">
                            {isEdit ? 'Modifier l\'employé' : 'Nouvel employé'}
                        </h2>
                        <p className="text-slate-400">
                            {isEdit ? 'Mettez à jour les informations du profil.' : 'Créez un nouveau profil dans la base de données.'}
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                            <User className="w-5 h-5 text-blue-400" />
                            Informations Personnelles
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#1e293b]/30 p-6 rounded-xl border border-white/5">
                            <div className={inputWrapperClasses}>
                                <label className={labelClasses}>Prénom</label>
                                <input
                                    type="text"
                                    name="prenom"
                                    placeholder="Ex: Sara"
                                    value={formData.prenom}
                                    onChange={handleChange}
                                    className={inputClasses}
                                    required
                                />
                            </div>
                            <div className={inputWrapperClasses}>
                                <label className={labelClasses}>Nom</label>
                                <input
                                    type="text"
                                    name="nom"
                                    placeholder="Ex: Bennani"
                                    value={formData.nom}
                                    onChange={handleChange}
                                    className={inputClasses}
                                    required
                                />
                            </div>
                            <div className={inputWrapperClasses}>
                                <label className={labelClasses}>Email Professionnel</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="prenom.nom@innovatetech.ma"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={inputClasses}
                                    required
                                />
                            </div>
                            <div className={inputWrapperClasses}>
                                <label className={labelClasses}>Téléphone</label>
                                <input
                                    type="tel"
                                    name="telephone"
                                    placeholder="06 XX XX XX XX"
                                    value={formData.telephone || ''}
                                    onChange={handleChange}
                                    className={inputClasses}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-purple-400" />
                            Informations Professionnelles
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#1e293b]/30 p-6 rounded-xl border border-white/5">
                            <div className={inputWrapperClasses}>
                                <label className={labelClasses}>Poste / Fonction</label>
                                <input
                                    type="text"
                                    name="poste"
                                    placeholder="Ex: Développeur Fullstack"
                                    value={formData.poste}
                                    onChange={handleChange}
                                    className={inputClasses}
                                    required
                                />
                            </div>
                            <div className={inputWrapperClasses}>
                                <label className={labelClasses}>Département</label>
                                <select
                                    name="departement"
                                    value={formData.departement}
                                    onChange={handleChange}
                                    className={inputClasses}
                                >
                                    {['IT', 'RH', 'Finance', 'Marketing', 'Commercial', 'Production'].map(dept => (
                                        <option key={dept} value={dept}>{dept}</option>
                                    ))}
                                </select>
                            </div>
                            <div className={inputWrapperClasses}>
                                <label className={labelClasses}>Salaire Mensuel (MAD)</label>
                                <input
                                    type="number"
                                    name="salaire"
                                    value={formData.salaire}
                                    onChange={handleChange}
                                    className={inputClasses}
                                    required
                                />
                            </div>
                            <div className={inputWrapperClasses}>
                                <label className={labelClasses}>Date d'embauche</label>
                                <input
                                    type="date"
                                    name="dateEmbauche"
                                    value={formData.dateEmbauche}
                                    onChange={handleChange}
                                    className={inputClasses}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 flex items-center justify-end gap-4 border-t border-white/10 mt-8">
                        <Button asChild variant="outline">
                            <Link to="/employees">Annuler</Link>
                        </Button>
                        <Button type="submit" className="gap-2">
                            {isEdit ? <Save className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
                            {isEdit ? 'Sauvegarder' : 'Créer l\'employé'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EmployeeForm;
