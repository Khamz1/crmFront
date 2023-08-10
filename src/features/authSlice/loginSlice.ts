import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginResponse, directorDataType } from "../../types/login";

export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async (director: directorDataType, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(director),
      });

      const response: LoginResponse & any  = await res.json();
     

      if (response.error || (Array.isArray(response) && response[0].msg)) {
        return thunkAPI.rejectWithValue(response.error || response[0].msg);
      }

      localStorage.setItem("token", response.token);

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const fetchMe = createAsyncThunk(
  "login/fetchMe",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:4000/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const me: directorDataType = await response.json();

      return me;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loading: false as boolean,
    director: null as directorDataType | null,
    token: localStorage.getItem("token") || (null as string | null),
    error: null as string | null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.director = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.director = action.payload as unknown as directorDataType;
        state.token = action.payload as unknown as string;
      });
    builder
      .addCase(fetchMe.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.director = action.payload as unknown as directorDataType;
      });
  },
});

export default loginSlice.reducer;
export const { logout } = loginSlice.actions;