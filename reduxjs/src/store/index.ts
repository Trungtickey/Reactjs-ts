
import {reducer as bookReducer} from "./slice/bookSlice"
import {reducer as orderReducer} from "./slice/bookOrderSlice"
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const root = combineReducers({ // gộp reducer thành 1 obj
     book : bookReducer,
     order : orderReducer,
})

// cấu hình store 
export const store = configureStore({
     reducer : root  
})
export default store;