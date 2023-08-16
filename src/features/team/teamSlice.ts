import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface  TeamTS {
   name: string;
   employeesTeam: string[];
  }
  interface TeamState {
    team: TeamTS[];
    error: string | null;
    loading: boolean;
  }
  const initialState:TeamState = {
    team: [],
    error: null,
    loading: false,
}
export const addTeam = createAsyncThunk(
    'team/add',
    async ({textInput, employeeID}, thunkAPI) => {
        console.log(employeeID);
        

       
        try {
            const res = await fetch('http://localhost:4000/team', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name:textInput, employeesTeam:employeeID}),
                
                
            })
            const team = await res.json()
            return team
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    
    })

    const teamSlise = createSlice({
        name: 'team',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
            .addCase(addTeam.pending, (state) => {
                state.loading = true,
                state.error = null
            })
            .addCase(addTeam.rejected, (state, action) => {
                state.loading = false,
                state.error = action.payload as string
            })
            .addCase(addTeam.fulfilled, (state, action) => {
                 state.team.push(action.payload as TeamTS),
                state.loading = false,
                state.error = null
            })
         
        }})
    
        export default teamSlise.reducer;
    