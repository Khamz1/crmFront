import {configureStore} from '@reduxjs/toolkit'
import auth from '../features/authSlice/authSlice'
import login from '../features/authSlice/loginSlice'
import category from '../features/categorySlice'
import employees from '../features/employeeSlice'

export const store = configureStore({
    reducer:{
    auth,
    login,
    category,
    employees
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;