import { createAsyncThunk , createSlice} from "@reduxjs/toolkit"

const initialState = {
    firms:[],
    loading:false,
    error:null,
    login:'',
    password:''
}

export const fetchFirms = createAsyncThunk(
    'fetch/firms',
    async (_, thunkAPI)=>{
        try {
            const res = await fetch('http://localhost:4000/getFirms');
            const firms = await res.json();
            if(firms.error){
                return thunkAPI.rejectWithValue(firms.error)
            }

            return thunkAPI.fulfillWithValue(firms)
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }

)

export const postFirm = createAsyncThunk(
    'post/firms',
    async(firm, thunkAPI)=>{
        try {
            const res = await fetch('http://localhost:4000/postFirms',{
                method:"POST",  
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({name:firm})
                 
            })

            const firms = await res.json()
            console.log(firms);
            
            
            
            
            

            return thunkAPI.fulfillWithValue(firms)
            
            
        } catch (error) {
         return   thunkAPI.rejectWithValue(error)
        }
    }
)

export const firmSlice=createSlice(
    {
        name:"firm",
        initialState,
        reducers:{
            setLogin(state, action){
                state.login=action.payload
                
            },
            setPassword(state, action){
                state.password=action.payload
            }
        },
        extraReducers:(builder)=>{
            builder
            .addCase(fetchFirms.pending, (state, action)=>{
                state.loading = true;
                state.error = null
            })
            .addCase(fetchFirms.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchFirms.fulfilled, (state, action)=>{
                state.loading = false;
                state.error = null;
                state.firms=action.payload
            })
            .addCase(postFirm.pending, (state, action)=>{
                state.loading = true;
                state.error = null
            })
            .addCase(postFirm.rejected, (state, action)=>{
                state.loading = false;
                state.error = true;
            })
            .addCase(postFirm.fulfilled, (state, action)=>{
                state.loading = false;
                state.error = null;
                state.firms.push(action.payload)
            })
        }
    }
)
export const {setLogin, setPassword}=firmSlice.actions
export default firmSlice.reducer;