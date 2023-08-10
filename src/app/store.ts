import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "../features/projectSlice";
import projectReducer from  "../features/projectSlice";
export const store = configureStore({
    reducer:{
        projectSlice,
        timer: projectReducer, 
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
