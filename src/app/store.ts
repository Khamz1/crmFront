import {configureStore} from '@reduxjs/toolkit'
import auth from '../features/authSlice/authSlice'
import login from '../features/authSlice/loginSlice'
export const store = configureStore({
    reducer:{
    auth,
    login
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;