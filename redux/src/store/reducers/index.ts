import { reducer } from './index';
import { createAction, createReducer } from '@reduxjs/toolkit';
import { act_increment_n } from './../actions/index';
import { combineReducers } from "redux";



// export const reducer = (state: number = 0, action : {type: string,payload:number})=>{ // có 1 hàm của toolkit giúp tạo reducer nhanh : createReducer  , createSlice 
//     switch (action.type){
//         case "INCREMENT_N":
//             // tăng giá trị state len n đơn vị
//             state += action.payload;
//             return state;
//         case "DECREMENT_N":
//             state -= action.payload;
//             return state;
//         case "POWER_UP_N":
//             state = Math.pow(state,action.payload);
//             return state;
//         default:
//             return state;
//     }

// }

// Sử dụng create action và create reducer:
export const act_increment = createAction("INCREMENT_N");
export const act_decrement = createAction("DECREMENT_N");

const reducer = createReducer(0, (builder)=>{
    builder.addCase(act_increment,(state, action))
})
// tạo root reducers
export const root = combineReducers({count: reducer})

