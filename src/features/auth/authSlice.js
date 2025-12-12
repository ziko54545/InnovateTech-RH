import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API_BASE_URL from '../../config/api';

const authApi = axios.create({
    baseURL: API_BASE_URL,
});

// Demo users for offline mode (works on GitHub Pages)
const DEMO_USERS = [
    {
        id: '1',
        email: 'admin@innovatetech.ma',
        password: 'admin123',
        role: 'admin',
        name: 'Admin'
    },
    {
        id: '2',
        email: 'demo@demo.com',
        password: 'demo123',
        role: 'admin',
        name: 'Demo User'
    }
];

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        const trimmedEmail = email.trim().toLowerCase();
        const trimmedPassword = password.trim();

        // Check demo users first (for GitHub Pages)
        const demoUser = DEMO_USERS.find(
            u => u.email.toLowerCase() === trimmedEmail && u.password === trimmedPassword
        );

        if (demoUser) {
            localStorage.setItem('user', JSON.stringify(demoUser));
            localStorage.setItem('demoMode', 'true');
            return demoUser;
        }

        try {
            // Try API if demo login didn't match
            const response = await authApi.get('/users');
            const user = response.data.find(
                u => u.email.toLowerCase() === trimmedEmail && u.password === trimmedPassword
            );

            if (!user) {
                return rejectWithValue('Email ou mot de passe incorrect');
            }

            localStorage.setItem('user', JSON.stringify(user));
            return user;
        } catch {
            // API failed and demo didn't match
            return rejectWithValue('Email ou mot de passe incorrect. Demo: admin@innovatetech.ma / admin123');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')) || null,
        isAuthenticated: !!localStorage.getItem('user'),
        loading: false,
        error: null,
        isDemoMode: !!localStorage.getItem('demoMode'),
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isDemoMode = false;
            localStorage.removeItem('user');
            localStorage.removeItem('demoMode');
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
                state.isDemoMode = !!localStorage.getItem('demoMode');
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
