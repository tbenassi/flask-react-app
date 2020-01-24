import rootReducer from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
        // If the following gets re-enabled, it should be for in dev only
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;