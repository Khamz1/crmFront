// src/redux/timerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    startTime: null,
    endTime: null,
    isRunning: false,
  },
  reducers: {
    startTimer(state, action) {
      state.startTime = new Date().toISOString();
      state.endTime = null;
      state.isRunning = true;
    },
    stopTimer(state, action) {
      state.endTime = new Date().toISOString();
      state.isRunning = false;
    },
    resetTimer(state, action) {
      state.startTime = null;
      state.endTime = null;
      state.isRunning = false;
    },
    updateTimer(state, action) {
      if (state.isRunning) {
        state.startTime = new Date().toISOString();
      }
    },
  },
});

export const { startTimer, stopTimer, resetTimer, updateTimer } = timerSlice.actions;
export default timerSlice.reducer;
