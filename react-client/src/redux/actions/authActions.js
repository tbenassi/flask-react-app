import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const loginUser = payload => dispatch => {
    // Save to localStorage
    // Set token to localStorage
    localStorage.setItem("oktaAccessToken", payload.accessToken);
    localStorage.setItem("oktaIdToken", payload.idToken);
    // Set token to Auth header
    setAuthToken('Bearer ' + payload.accessToken);
    // Decode token to get user data
    const userData = jwt_decode(payload.idToken);
    // Set current user
    dispatch(setCurrentUser(userData));
};

export const setCurrentUser = decoded => {
    return {
        type: "SET_CURRENT_USER",
        payload: decoded
    };
};

export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem("oktaAccessToken");
    localStorage.removeItem("oktaIdToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false; reducer in authReducer gets set back to its initial state
    dispatch(setCurrentUser({}));
};