import { combineReducers } from "redux";
import CounterReducer from "./counterReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    counter: CounterReducer,
    cart:cartReducer
})

export default rootReducer;