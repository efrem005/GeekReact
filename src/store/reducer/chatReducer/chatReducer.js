import {GET_CHAT_LIST, ADD_CHAT_LIST, DELETE_CHAT_LIST} from './actionType'
import { db } from '../../../util/firebase'
import {getInitialFirebase, getPayloadFromSnapshot} from "./actionCreated";

const initialState = {
    chatItems: []
}

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHAT_LIST:
            return {
                ...state,
                chatItems: action.payload
            }
        case ADD_CHAT_LIST:
            return {
                ...state,
                chatItems: [...state.chatItems, {id: Date.now(), name: action.payload}]
            }
        case DELETE_CHAT_LIST: {
            return {
                ...state,
                chatItems: state.chatItems.filter(item => item.id !== action.payload)
            }
        }
        default: {
            return state
        }
    }
}

export default chatReducer

export const getChatInitial = () => {
    return dispatch => {
        db.ref("chatList").on("value", (snapshot) => {
            const payload = getPayloadFromSnapshot(snapshot);
            dispatch(getInitialFirebase(payload.chatList))
        })
    }
}

export const setChatList = (name) => {
    return dispatch => {
        db.ref("chatList").push(name)
    }
}