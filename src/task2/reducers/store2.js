import { createStore } from "redux";
import { combineReducers } from "redux";
import { addition,substraction,division,multiplication,clearAnswer } from "./reducers";
const store2=createStore(combineReducers({
addition,
substraction,
division,
multiplication,
clearAnswer
}))

export default store2;