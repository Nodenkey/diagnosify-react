import {
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    VERIFY_REQUEST,
    VERIFY_SUCCESS,
    SIGN_UP_SUCCESS,
    SIGN_UP_REQUEST,
    SIGN_UP_FAILURE,
} from "../constants";

const INITIAL_STATE = {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: false,
    logoutError: false,
    isAuthenticated: false,
    user: {},
    loginErrorMessage: '',
    isSigningUp: false,
    signUpError: false,
    signedUp: false,
    signUpErrorMessage: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state, isLoggingIn: true, loginError: false,
            };
        case LOGIN_SUCCESS:
            return {
              ...state,isLoggingIn: false, isAuthenticated: true,
                user: action.user,
            };
        case LOGIN_FAILURE:
            return {
                ...state, isLoggingIn: false, isAuthenticated: false, loginError: true, loginErrorMessage: action.error.message,
            };
        case LOGOUT_REQUEST:
            return {
                ...state, isLoggingOut: true, logoutError: false, signUpErrorMessage: '', loginErrorMessage: '',
            };
        case LOGOUT_SUCCESS:
            return {
                ...state, isLoggingOut: false, isAuthenticated: false, user: {}, signUpErrorMessage: '', loginErrorMessage: '',
            };
        case LOGOUT_FAILURE:
            return{
                ...state, isLoggingOut: false, logoutError: true,
            };
        case VERIFY_REQUEST:
            return {
                ...state,
                isVerifying: true,
                verifyingError: false
            };
        case VERIFY_SUCCESS:
            return {
                ...state,
                isVerifying: false
            };
        case SIGN_UP_REQUEST:
            return {
              ...state, isSigningUp: true,  signedUp: false,
            };
        case SIGN_UP_SUCCESS:
            return {
              ...state, isSigningUp: false, signUpError: false, signedUp: true,
            };
        case SIGN_UP_FAILURE:
            return {
              ...state, isSigningUp: false, signedUp: false, signUpError: true, signUpErrorMessage: action.error.message,
            };
        default:
            return state

    }
};

export default userReducer;