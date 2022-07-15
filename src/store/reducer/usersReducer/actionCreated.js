import * as types from "./actionType";

export const registerStart = () => ({
    type: types.REGISTER_START
})

export const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user
})

export const registerError = (err) => ({
    type: types.REGISTER_ERROR,
    payload: err.toString()
})

export const loginStart = () => ({
    type: types.LOGIN_START
})

export const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user
})

export const loginError = (err) => ({
    type: types.LOGIN_ERROR,
    payload: err.toString()
})

export const logoutStart = () => ({
    type: types.LOGOUT_START
})

export const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
})

export const logoutError = (err) => ({
    type: types.LOGOUT_ERROR,
    payload: err.toString()
})