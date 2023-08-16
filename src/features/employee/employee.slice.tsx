import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    employees:[],
    loading:false,
    error:null
}

export const fetchEmployees = createAsyncThunk(
    'fetch/async',
    async (_, thunkAPI)=>{
        try {
            const res = await fetch ('http://localhost:4000/getEmployees')
            const emps = await res.json();
            if(emps.error){
                return thunkAPI.rejectWithValue(emps.error)
            }
            return emps
        } catch (error) {
           return thunkAPI.rejectWithValue(error)
        }
    },

)

export const postEmployees = createAsyncThunk(
    'post/emps',
    async ({email,firstName, secondName, image,role,login,password,firm}, thunkAPI)=>{
       try {
        const formData = new FormData();
        formData.append('email',email);
        formData.append('firstName',firstName);
        formData.append('secondName',secondName);
        formData.append('role',role);
        formData.append('login',login);
        formData.append('password',password);
        formData.append('firm',firm)
        

        for(let item of image){
            formData.append('image',item)
        }
        const res = await fetch('http://localhost:4000/addEmployees',{
            method:"POST",
            body:formData
        })
        const emps = await res.json();
        console.log(emps+"EMPS");
        
        if(emps.error){
            return thunkAPI.rejectWithValue(emps.error)
        }
        return thunkAPI.fulfillWithValue(emps)        
        
       } catch (error) {
        return thunkAPI.rejectWithValue(error)
       }
    }
)

export const employeeSlice = createSlice({
    name:"employees",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchEmployees.pending,(state, action)=>{
            state.loading=true,
            state.error=null
        })
        .addCase(fetchEmployees.rejected,(state,action)=>{
            state.loading = false,
            state.error = null
        })
        .addCase(
            fetchEmployees.fulfilled,(state,action)=>{
                state.loading = false,
                state.error=false,
                state.employees = action.payload
            }
        )
        .addCase(postEmployees.pending,(state,action)=>{
            state.loading = true,
            state.error = null
        })
        .addCase(postEmployees.rejected,(state,action)=>{
            state.loading = false,
            state.error=action.payload
        })
        .addCase(postEmployees.fulfilled,(state,action)=>{
            state.loading = false,
            state.error=null,
            state.employees.push(action.payload)
        })
    }
})

export default employeeSlice.reducer