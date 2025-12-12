import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API_BASE_URL from '../../config/api';

const authApi = axios.create({
    baseURL: API_BASE_URL,
});

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        const trimmedEmail = email.trim().toLowerCase();
        const trimmedPassword = password.trim();

        try {
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
            return rejectWithValue('Erreur de connexion au serveur');
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
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('user');
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
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
