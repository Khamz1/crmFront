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

export const postProject = createAsyncThunk("post", async (data, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/project/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ totalDays: data }),
    });
    console.log("start");
    const project = await res.json();
    return thunkAPI.fulfillWithValue(data);
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
        state.totalDays.push(action.payload)
    })
  }
});

export default projectSlice.reducer;