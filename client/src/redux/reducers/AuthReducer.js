import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,

    AUTH_USER_REQUEST,
    AUTH_USER_SUCCESS,
    AUTH_USER_FAIL,


    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_RESET,

    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    UPDATE_PASSWORD_RESET,

    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,

    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,

    CLEAR_ERRORS
} from "../constants/AuthConstant";

export const AuthReducer = (state = { toekn: {} }, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case AUTH_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            };

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
        case AUTH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                message: action.payload.message,
                status: action.payload.status,
                token: action.payload.token,
                user: action.payload.user,
                errors: action.payload.errors,
            };

        case REGISTER_FAIL:
        case LOGIN_FAIL:
            return {
                ...state,
                token: null,
                loading: false,
                isAuthenticated: false,
                message: action.payload.message,
                status: action.payload.status,
                errors: action.payload,
            };
        case AUTH_USER_FAIL:
            return {
                token: null,
                loading: false,
                isAuthenticated: false,
            };


        case CLEAR_ERRORS:
            return {
                ...state,
                message: null,
                status: null,
                errors: null,
            };

        default:
            return state;
    }
}


export const updateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
        case UPDATE_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case UPDATE_PROFILE_SUCCESS:
        case UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                status: action.payload.status,
                isUpdated: true,
            };
        case UPDATE_PROFILE_FAIL:
        case UPDATE_PASSWORD_FAIL:
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                status: action.payload.status,
                errors: action.payload,
            };
        case UPDATE_PROFILE_RESET:
        case UPDATE_PASSWORD_RESET:
            return {
                ...state,
                isUpdated: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: null,
            };

        default:
            return state;
    }
}


export const ForgotPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST:
        case RESET_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
                errors: null
            };

        case FORGOT_PASSWORD_SUCCESS:
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: true,
                status: action.payload.status,
                message: action.payload.message,
            };


        case FORGOT_PASSWORD_FAIL:
        case RESET_PASSWORD_FAIL:
            return {
                ...state,
                loading: false,
                isUpdated: false,
                errors: action.payload,
                status: action.payload.status,
                message: action.payload.message,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                errors: null,
                status: null,
                message: null,
                isUpdated: null,
            };

        default:
            return state;
    }
}