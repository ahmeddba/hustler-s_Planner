import { combineReducers } from "redux";
import { todoReducer } from "./TaskReducer";
import { AuthReducer } from "./AuthReducer";

const rootReducer = combineReducers({todoReducer , AuthReducer });

export default rootReducer;
 