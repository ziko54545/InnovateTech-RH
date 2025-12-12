import axios from 'axios';
import API_BASE_URL from '../config/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});

export const employeeService = {
    getAll: async () => {
        return await api.get('/employees');
    },

    getById: async (id) => {
        return await api.get(`/employees/${id}`);
    },

    create: async (data) => {
        return await api.post('/employees', data);
    },

    update: async (id, data) => {
        return await api.patch(`/employees/${id}`, data);
    },

    delete: async (id) => {
        return await api.delete(`/employees/${id}`);
    },
};

export default api;
