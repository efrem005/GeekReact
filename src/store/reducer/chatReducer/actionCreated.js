import * as types from './actionType'

export const addChatList = (name) => ({
    type: types.ADD_CHAT_LIST,
    payload: name
})

export const deleteChatList = (id) => ({
    type: types.DELETE_CHAT_LIST,
    payload: id
})