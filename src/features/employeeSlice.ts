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
// export const addEmployeeToTeam = createAsyncThunk(
//     'addEmployee/team',
//     async({teamID, iduser}, thunkAPI) => {
//         try {
//             console.log(iduser);
            
//             const res = await fetch(`http://localhost:4000/patchEmployees/${iduser}`, {
//                 method: 'PATCH',
//                 headers: {
//                   'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({team: teamID }),
//               })
//               const employ = await res.json()
//               return thunkAPI.fulfillWithValue(employ);
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// )

export const addEmployeeToCategory = createAsyncThunk(
    'addEmployee/fetch',
    async({selectedEmployee, selectedCategory}, thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:4000/patchEmployees/${selectedEmployee}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ category: selectedCategory }),
              })
              const employee = await res.json()
              return thunkAPI.fulfillWithValue(employee);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
//  fetch(`http://localhost:4000/patchEmployees/${selectedEmployee}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ category }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Сотрудник добавлен в категорию:', data);
//         // Вы можете добавить обработку успешного ответа здесь,
//         // например, обновление списка сотрудников в выбранной категории.
//       })
//       .catch((error) => {
//         console.error('Ошибка при добавлении сотрудника в категорию:', error);
//       });


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
        .addCase(addEmployeeToCategory.fulfilled, (state, action)=>{
            
            state.employees.map(item => item._id === action.payload),
            state.loading = false,
            state.error = null
        })
        .addCase(addEmployeeToCategory.pending, (state, action)=>{
            state.loading = true,
            state.error = null
        })
  
    }
})

export default employeesSlice.reducer