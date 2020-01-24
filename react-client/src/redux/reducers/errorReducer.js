export const ERROR_TYPES = {
    GET_ERRORS: "GET_ERRORS",
    CLEAR_ERRORS: "CLEAR_ERRORS"
};

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case ERROR_TYPES.GET_ERRORS:
            return action.payload;
        case ERROR_TYPES.CLEAR_ERRORS:
            return {};
        default:
            return state;
    }
}