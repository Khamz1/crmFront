import { configureStore } from "@reduxjs/toolkit";
import timerSlice from "../features/timerSlice";
import timerReducer from  "../features/timerSlice";
export const store = configureStore({
    reducer:{
        timerSlice,
        timer: timerReducer, 
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
