import { combineReducers, createStore } from "redux";
import { Product } from "../ulti/ulti";

const initialState: Product[] = [
  {
    id: 1,
    name: "cam sanh",
    price: "20000",
    quantity: "10",
  },
  {
    id: 2,
    name: "buoi",
    price: "50000",
    quantity: "15",
  },
];

export const reducer3 = (
  state: Product[] = initialState,
  action: { type: string; payload: Product }
) => {
  switch (action.type) {
    default:
      return state;
  }
};