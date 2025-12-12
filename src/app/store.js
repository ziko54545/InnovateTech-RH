import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../features/employees/employeeSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
    reducer: {
        employees: employeeReducer,
        auth: authReducer,
    },
});
