import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    employees: [],
    error: null,
    loading: false,
}

export const fetchEmployee = createAsyncThunk(
    'employee/fetch',
    async(data, thunkAPI)=>{
        try {
            const res = await fetch('http://localhost:4000/getEmployees')
            const employees = await res.json()
            return employees
        } catch (error) {
            return error
        }
    }
)


const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchEmployee.fulfilled, (state, action)=>{
            // console.log(action.payload);
            state.employees = action.payload,
            state.loading = false,
            state.error = null
        })
        .addCase(fetchEmployee.pending, (state, action)=>{
            state.loading = true,
            state.error = null
        })
        .addCase(fetchEmployee.rejected, (state, action)=>{
            state.loading = false,
            state.error = action.payload
        })
       
    }
})

export default employeesSlice.reducer