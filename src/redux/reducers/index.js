import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import orderReducer from "./orderReducer";

const allReducers = combineReducers({
    menuReducer,
    orderReducer,
})

export default allReducers;
