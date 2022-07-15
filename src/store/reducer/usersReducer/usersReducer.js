import * as types from "./actionType";
import {
    loginError,
    loginStart,
    loginSuccess, logoutError,
    logoutStart, logoutSuccess,
    registerError,
    registerStart,
    registerSuccess
} from "./actionCreated";
import {auth} from "../../../util/firebase";

const initialState = {
    user: null,
    error: null,
    loading: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_START:
        case types.LOGIN_START:
        case types.LOGOUT_START:
            return {
                ...state,
                loading: true
            }
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null
            }
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                user: null,
                loading: false,
                error: null
            }
        case types.REGISTER_ERROR:
        case types.LOGIN_ERROR:
        case types.LOGOUT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default usersReducer

export const registerInitial = (email, password, displayName) => {
    return dispatch => {
        dispatch(registerStart())
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                console.log(user)
                user.updateProfile({ displayName })
                dispatch(registerSuccess(user))
            })
            .catch(err => dispatch(registerError(err)))
    }
}

export const loginInitial = (email, password) => {
    return dispatch => {
        dispatch(loginStart())
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({user}) => dispatch(loginSuccess(user)))
            .catch(err => dispatch(loginError(err)))
    }
}

export const logoutInitial = () => {
    return dispatch => {
        dispatch(logoutStart())
        auth
            .signOut()
            .then(() => dispatch(logoutSuccess()))
            .catch(err => dispatch(logoutError(err)))
    }
}