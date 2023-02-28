import axios from 'axios'

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

    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,

    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,

    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,

    CLEAR_ERRORS,
} from "../constants/AuthConstant";
import { BaseURL } from '../constants/Base_URL';



export const LoginFunction = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });

        const { data } = await axios.post(`${BaseURL}/auth/login/`, {
            email, password,
            headers: {
                "Content-Type": "application/json",
            }
        });
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data
        })
    }
}


export const RegisterFunction = (name, email, password, password2, is_admin = false, is_active = true) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_REQUEST });

        const { data } = await axios.post(`${BaseURL}/auth/register/`, {
            name, email, password, password2, is_admin, is_active,
            headers: {
                "Content-Type": "application/json",
            }
        });
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data
        })
    }
}


export const AuthUser = () => async (dispatch) => {
    try {
        dispatch({ type: AUTH_USER_REQUEST });

        const token = localStorage.getItem('token');
        const { data } = await axios.get(`${BaseURL}/auth/profile/`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        dispatch({
            type: AUTH_USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: AUTH_USER_FAIL,
            payload: error.response.data
        })
    }
}





export const ProfileUpdateFunction = (form) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST });

        const token = localStorage.getItem('token');

        const { data } = await axios.post(`${BaseURL}/auth/profile_update/`, form, {
            headers: {
                // 'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: error.response.data
        })
    }
}


export const PasswordUpdateFunction = (password, password2) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PASSWORD_REQUEST });

        const token = localStorage.getItem('token');


        const bodyParameters = {
            password: password,
            password2: password2,
        };
        const { data } = await axios.post(`${BaseURL}/auth/update_password/`, bodyParameters, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: error.response.data
        })
    }
}


export const ForgotPasswordFunction = (email) => async (dispatch) => {
    try {
        dispatch({ type: FORGOT_PASSWORD_REQUEST });

        const { data } = await axios.post(`${BaseURL}/auth/send-reset-password-email/`, {
            email,
            headers: {
                "Content-Type": "application/json",
            }
        });
        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: error.response.data
        })
    }
}


export const RestPasswordFunction = (password, password2, uid, token) => async (dispatch) => {
    try {
        dispatch({ type: RESET_PASSWORD_REQUEST });

        const { data } = await axios.post(`${BaseURL}/auth/reset-password/${uid}/${token}/`, {
            password, password2,
            headers: {
                "Content-Type": "application/json",
            }
        });
        dispatch({
            type: RESET_PASSWORD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: RESET_PASSWORD_FAIL,
            payload: error.response.data
        })
    }
}
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};