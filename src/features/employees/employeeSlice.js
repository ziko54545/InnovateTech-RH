import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { employeeService } from '../../services/api';

// Async Thunks
export const fetchEmployees = createAsyncThunk(
    'employees/fetchAll',
    async () => {
        const response = await employeeService.getAll();
        return response.data;
    }
);

export const addEmployee = createAsyncThunk(
    'employees/add',
    async (employeeData) => {
        const response = await employeeService.create(employeeData);
        return response.data;
    }
);

export const updateEmployee = createAsyncThunk(
    'employees/update',
    async ({ id, data }) => {
        const response = await employeeService.update(id, data);
        return response.data;
    }
);

export const deleteEmployee = createAsyncThunk(
    'employees/delete',
    async (id) => {
        await employeeService.delete(id);
        return id;
    }
);

const employeeSlice = createSlice({
    name: 'employees',
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch All
            .addCase(fetchEmployees.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchEmployees.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchEmployees.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Add
            .addCase(addEmployee.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })
            // Update
            .addCase(updateEmployee.fulfilled, (state, action) => {
                const targetId = action.payload?.id ?? action.meta?.arg?.id;
                const index = state.list.findIndex(emp => String(emp.id) === String(targetId));
                if (index !== -1) {
                    state.list[index] = action.payload;
                } else if (action.payload) {
                    // Fallback: append if not found (id type mismatch or missing)
                    state.list = state.list.map(emp =>
                        String(emp.id) === String(targetId) ? { ...emp, ...action.payload } : emp
                    );
                }
            })
            // Delete
            .addCase(deleteEmployee.fulfilled, (state, action) => {
                state.list = state.list.filter(emp => String(emp.id) !== String(action.payload));
            });
    },
});

export default employeeSlice.reducer;
