import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/authSlice/authSlice";
import login from "../features/authSlice/loginSlice";

import {configureStore} from '@reduxjs/toolkit'
import auth from '../features/authSlice/authSlice'
import login from '../features/authSlice/loginSlice'
import team from '../features/team/teamSlice'

import firm from '../features/firmSlice/firmSlice'
import employee from '../features/employee/employee.slice'

import category from '../features/categorySlice'
import employees from '../features/employeeSlice'

import category from "../features/categorySlice";
import employees from "../features/employeeSlice";
import projects from "../features/projectSlice"
export const store = configureStore({
  reducer: {
    auth,
    login,
    team,
    firm,
    employee,
    projects,
    category,
    employees,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
