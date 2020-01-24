import isEmpty from "../../utils/is-empty";

const TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER"
};

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TYPES.SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
}
