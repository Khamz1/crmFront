import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalDays: [],
};

export const fetchProject = createAsyncThunk(
  "fetch/fetchProject",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/project/");
      const fetchProject = await res.json();
      return thunkAPI.fulfillWithValue(fetchProject);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postProject = createAsyncThunk("post", async ({projectManager, idCustomer, emailCustomer, addressCustomer, typeCompany,  name, startTime, endTime }, thunkAPI) => {
  
  const token = thunkAPI.getState().auth.token;
  console.log(projectManager);
  
  try {
    const res = await fetch("http://localhost:4000/project/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:`Bearer ${token}`
      },
      body: JSON.stringify({projectManager, idCustomer, emailCustomer, addressCustomer, typeCompany,  name, startTime, endTime }),
    });
    const project = await res.json();
    console.log("postProject response:", project); // Вывод данных

    return thunkAPI.fulfillWithValue(project);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder
    .addCase(fetchProject.fulfilled, (state,action) => {
        state.totalDays = action.payload
    })
    .addCase(postProject.fulfilled,(state,action) => {
      console.log(action.payload);
      
        state.totalDays.push(action.payload)
    })
  }
});

export default projectSlice.reducer;