
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Employee {
    firstName: string;
    _id: string;
    category: string;
}

interface EmployeesState {
    employees: Employee[];
    error: string | null;
    loading: boolean;
}

export const fetchEmployee = createAsyncThunk<Employee[]>(
    'employee/fetch',
    async (data, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:4000/getEmployees');
            const employees = await res.json();
            return employees;
        } catch (error) {
            throw error;
        }
    }
);

export const addEmployeeToCategory = createAsyncThunk<Employee, { selectedEmployee: string, selectedCategory: string }>(
    'addEmployee/fetch',
    async ({ selectedEmployee, selectedCategory }, thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:4000/patchEmployees/${selectedEmployee}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ category: selectedCategory }),
            });
            const employee = await res.json();
            return employee;
        } catch (error) {
            throw error;
        }
    }
);

const employeesSlice = createSlice({
    name: 'employees',
    initialState: {
        employees: [],
        error: null,
        loading: false,
    } as EmployeesState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployee.fulfilled, (state, action) => {
                state.employees = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchEmployee.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEmployee.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Произошла ошибка";
            })
            .addCase(addEmployeeToCategory.fulfilled, (state, action) => {
                const updatedEmployees = state.employees.map(item =>
                    item._id === action.payload._id
                        ? { ...item, category: action.payload.category }
                        : item
                );
                state.employees = updatedEmployees;
                state.loading = false;
                state.error = null;
            })
            .addCase(addEmployeeToCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addEmployeeToCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Произошла ошибка";
            });
    }
});

export default employeesSlice.reducer;
