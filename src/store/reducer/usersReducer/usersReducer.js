import {ERROR, GET_API_USER, GET_API_USERS, SET_LOADER} from "./actionType";
import {loader, setError, userOne, usersAll} from "./actionCreated";

const initialState = {
    users: [],
    user: [],
    loader: false,
    error: null
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_API_USERS:
            return {
                ...state,
                users: action.payload,
                loader: false,
                error: null
            }
        case GET_API_USER:
            return {
                ...state,
                user: action.payload,
                loader: false,
                error: null
            }
        case SET_LOADER: {
            return {
                ...state,
                loader: true
            }
        }
        case ERROR:
            return {
                ...state,
                error: action.payload,
                loader: false
            }
        default:
            return state
    }
}

export default usersReducer

export const apiUsers = () => {
    return async dispatch => {
        dispatch(loader())
        try {
            const response = await fetch('https://api.github.com/users')
            const data = await response.json();
            dispatch(usersAll(data))
        } catch (e) {
            dispatch(setError(e))
        }
    }
}

export const apiUserOne = (id) => {
    return async dispatch => {
        dispatch(loader())
        try {
            const response = await fetch(`https://api.github.com/users/${id}`)
            const data = await response.json();
            dispatch(userOne(data))
        } catch (error) {
            dispatch(setError(error))
        }
    }
}