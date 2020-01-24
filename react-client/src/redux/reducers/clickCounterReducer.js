export const CLICK_COUNTER_TYPES = {
    CLICK_COUNTER_LOADING: "CLICK_COUNTER_LOADING",
    GET_COUNT: "GET_COUNT"
};

const initialState = {
    count: null,
    loading: false // allows for a spinner if it's still loading
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CLICK_COUNTER_TYPES.CLICK_COUNTER_LOADING:
            return {
                ...state,
                loading: true
            };
        case CLICK_COUNTER_TYPES.GET_COUNT:
            return {
                ...state,
                count: action.payload,
                loading: false
            };
        default:
            return state
    }
}