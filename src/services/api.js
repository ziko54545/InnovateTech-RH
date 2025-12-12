import axios from 'axios';
import API_BASE_URL from '../config/api';
import { DEMO_EMPLOYEES } from '../data/demoData';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000, // 5 second timeout
});

// Check if we're in demo mode
const isDemoMode = () => {
    return localStorage.getItem('demoMode') === 'true';
};

// Get demo employees from localStorage or use default
const getDemoEmployees = () => {
    const stored = localStorage.getItem('demoEmployees');
    if (stored) {
        return JSON.parse(stored);
    }
    localStorage.setItem('demoEmployees', JSON.stringify(DEMO_EMPLOYEES));
    return DEMO_EMPLOYEES;
};

// Save demo employees to localStorage
const saveDemoEmployees = (employees) => {
    localStorage.setItem('demoEmployees', JSON.stringify(employees));
};

export const employeeService = {
    getAll: async () => {
        if (isDemoMode()) {
            return { data: getDemoEmployees() };
        }
        try {
            return await api.get('/employees');
        } catch {
            // Fallback to demo mode
            localStorage.setItem('demoMode', 'true');
            return { data: getDemoEmployees() };
        }
    },

    getById: async (id) => {
        if (isDemoMode()) {
            const employees = getDemoEmployees();
            const employee = employees.find(e => e.id === id);
            return { data: employee };
        }
        try {
            return await api.get(`/employees/${id}`);
        } catch {
            const employees = getDemoEmployees();
            const employee = employees.find(e => e.id === id);
            return { data: employee };
        }
    },

    create: async (data) => {
        if (isDemoMode()) {
            const employees = getDemoEmployees();
            const newEmployee = {
                ...data,
                id: Date.now().toString(),
                matricule: `EMP${Math.floor(1000 + Math.random() * 9000)}`,
                status: 'Active'
            };
            employees.push(newEmployee);
            saveDemoEmployees(employees);
            return { data: newEmployee };
        }
        try {
            return await api.post('/employees', data);
        } catch {
            // Fallback
            const employees = getDemoEmployees();
            const newEmployee = {
                ...data,
                id: Date.now().toString(),
                matricule: `EMP${Math.floor(1000 + Math.random() * 9000)}`,
                status: 'Active'
            };
            employees.push(newEmployee);
            saveDemoEmployees(employees);
            return { data: newEmployee };
        }
    },

    update: async (id, data) => {
        if (isDemoMode()) {
            const employees = getDemoEmployees();
            const index = employees.findIndex(e => e.id === id);
            if (index !== -1) {
                employees[index] = { ...employees[index], ...data };
                saveDemoEmployees(employees);
                return { data: employees[index] };
            }
            return { data: null };
        }
        try {
            return await api.patch(`/employees/${id}`, data);
        } catch {
            const employees = getDemoEmployees();
            const index = employees.findIndex(e => e.id === id);
            if (index !== -1) {
                employees[index] = { ...employees[index], ...data };
                saveDemoEmployees(employees);
                return { data: employees[index] };
            }
            return { data: null };
        }
    },

    delete: async (id) => {
        if (isDemoMode()) {
            const employees = getDemoEmployees();
            const filtered = employees.filter(e => e.id !== id);
            saveDemoEmployees(filtered);
            return { data: {} };
        }
        try {
            return await api.delete(`/employees/${id}`);
        } catch {
            const employees = getDemoEmployees();
            const filtered = employees.filter(e => e.id !== id);
            saveDemoEmployees(filtered);
            return { data: {} };
        }
    },
};

export default api;
