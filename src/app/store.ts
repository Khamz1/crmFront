import { configureStore } from "@reduxjs/toolkit";
import totalDays from '../features/timerSlice';
export const store = configureStore({
    reducer:{
        totalDays
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
