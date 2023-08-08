import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  totalDays:[]
}

export const fetchTotalDays = createAsyncThunk(
  'days/fetch',
  async(_,thunkAPI) => {
    const token = thunkAPI.getState().application.token
    try {
      const res = await fetch('http://localhost:4000/timer/manageTimer', {
        headers:{
          Authorization:`Bearer ${token}`
      }
      })
      const totalDays = await res.json()
      if(totalDays.error) {
        return thunkAPI.rejectWithValue(totalDays.error)
    }
    return totalDays
    } catch (error) {
      thunkAPI.rejectWithValue(error)
    }
  }
)

export const postDay = createAsyncThunk('post', async(text, thunkAPI) => {
  try {
    const res = await fetch('http://localhost:4000/timer/manageTimer', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        Authorization: `Bearer ${thunkAPI.getState().application.token}` // Добавляем заголовок авторизации
      },
      body: JSON.stringify({  text })
    })
    const days = await res.json()
    return thunkAPI.fulfillWithValue(days)
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

const timerSlice = createSlice({
  name:'timer',
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder
    .addCase(postDay.fulfilled, (state, action) => {
      state.days.push(action.payload)
    })
    .addCase(fetchTotalDays.fulfilled,(state, action) => {
      state.days = action.payload
    })
  }
})
export default timerSlice.reducer