import { combineReducers, createStore } from "redux";
import { IUser } from "../ulti/ulti";

const initialState: IUser[] = [
  {
    id: 1,
    name: "trung",
    sex: true,
    date: "28/03/2004",
    address: "hucliudh",
  },
  {
    id: 2,
    name: "tam anh",
    sex: false,
    date: "16/7/2024",
    address: "dhnzlchs",
  },
];

export const reducer2 = (
  state: IUser[] = initialState,
  action: { type: string; payload: IUser }
) => {
  switch (action.type) {
    default:
      return state;
  }
};