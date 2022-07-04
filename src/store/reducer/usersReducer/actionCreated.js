import {ERROR, GET_API_USER, GET_API_USERS, SET_LOADER} from "./actionType";

export const usersAll = (data) => ({
    type: GET_API_USERS,
    payload: data
})

export const userOne = (data) => ({
    type: GET_API_USER,
    payload: data
})

export const loader = () => ({
    type: SET_LOADER
})

export const setError = (e) => (    {
    type: ERROR,
    payload: e.toString()
})