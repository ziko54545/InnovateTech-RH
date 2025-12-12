import axios from 'axios';
import JSONBIN_CONFIG from '../config/jsonbin';

const jsonbinApi = axios.create({
    baseURL: JSONBIN_CONFIG.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_CONFIG.MASTER_KEY,
        'X-Access-Key': JSONBIN_CONFIG.ACCESS_KEY
    },
    timeout: 10000,
});

const getBinData = async (binId) => {
    const response = await jsonbinApi.get(`/${binId}/latest`);
    return response.data.record;
};

const updateBinData = async (binId, data) => {
    const response = await jsonbinApi.put(`/${binId}`, data);
    return response.data.record;
};

export const employeeService = {
    getAll: async () => {
        const data = await getBinData(JSONBIN_CONFIG.EMPLOYEES_BIN_ID);
        return { data: data.employees || [] };
    },

    getById: async (id) => {
        const data = await getBinData(JSONBIN_CONFIG.EMPLOYEES_BIN_ID);
        const employee = (data.employees || []).find(e => e.id === id);
        return { data: employee };
    },

    create: async (employeeData) => {
        const data = await getBinData(JSONBIN_CONFIG.EMPLOYEES_BIN_ID);
        const employees = data.employees || [];
        const newEmployee = {
            ...employeeData,
            id: Date.now().toString(36)
        };
        employees.push(newEmployee);
        await updateBinData(JSONBIN_CONFIG.EMPLOYEES_BIN_ID, { ...data, employees });
        return { data: newEmployee };
    },

    update: async (id, updates) => {
        const data = await getBinData(JSONBIN_CONFIG.EMPLOYEES_BIN_ID);
        const employees = data.employees || [];
        const index = employees.findIndex(e => e.id === id);
        if (index !== -1) {
            employees[index] = { ...employees[index], ...updates };
            await updateBinData(JSONBIN_CONFIG.EMPLOYEES_BIN_ID, { ...data, employees });
            return { data: employees[index] };
        }
        throw new Error('Employee not found');
    },

    delete: async (id) => {
        const data = await getBinData(JSONBIN_CONFIG.EMPLOYEES_BIN_ID);
        const employees = (data.employees || []).filter(e => e.id !== id);
        await updateBinData(JSONBIN_CONFIG.EMPLOYEES_BIN_ID, { ...data, employees });
        return { data: { id } };
    },
};

export const getUsers = async () => {
    const data = await getBinData(JSONBIN_CONFIG.USERS_BIN_ID);
    return data.users || [];
};

export default jsonbinApi;
