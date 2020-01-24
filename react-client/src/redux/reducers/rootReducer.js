import {combineReducers} from "redux";
import authReducer from "./authReducer";
import clickCounterReducer from "./clickCounterReducer";
import errorReducer from "./errorReducer";


export default combineReducers({
    auth: authReducer,
    clickCounter: clickCounterReducer,
    errors: errorReducer,
});
