import axios from "axios";
import {CLICK_COUNTER_TYPES} from "../reducers/clickCounterReducer"
import {ERROR_TYPES} from "../reducers/errorReducer";

function setClickCounterLoading() {
    return {
        type: CLICK_COUNTER_TYPES.CLICK_COUNTER_LOADING
    }
}

// Get all campaigns
export const getCount = () => dispatch => {
    dispatch(setClickCounterLoading());
    axios
        .get("/api/click_counter")
        .then(res => {
            dispatch({
                type: CLICK_COUNTER_TYPES.GET_COUNT,
                payload: res.data.count
            });
        })
        .catch(err => {
                console.log(err);
                dispatch({
                    type: ERROR_TYPES.GET_ERRORS,
                    payload: err.response.data
                });
            }
        );
};

export const incrementCount = () => dispatch => {
    dispatch(setClickCounterLoading());
    axios
        .post('/api/click_counter')
        .then(res => {
            dispatch({
                type: CLICK_COUNTER_TYPES.GET_COUNT,
                payload: res.data.count
            });
        })
        .catch(err => {
                console.log(err);
                dispatch({
                    type: ERROR_TYPES.GET_ERRORS,
                    payload: err.response.data
                });
            }
        );
};