import { createStore } from "redux";
import { combineReducers } from "redux";
import { cakeReducer, Chocolates, IceCreamReducer } from "./reducers";

const store=createStore(combineReducers({
    cake:cakeReducer,
    iceCream:IceCreamReducer,
    chocolate:Chocolates
}))

export default store;