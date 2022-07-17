import * as types from './actionType'

export const getInitialFirebase = (list) => ({
    type: types.GET_CHAT_LIST,
    payload: list
})

export const addChatList = (name) => ({
    type: types.ADD_CHAT_LIST,
    payload: name
})

export const deleteChatList = (id) => ({
    type: types.DELETE_CHAT_LIST,
    payload: id
})

export const getPayloadFromSnapshot = (snapshot) => {
    const chatList = [];
    snapshot.forEach((mes) => {
        chatList.push({id: mes.key, name: mes.val()});
    });
    return { chatList }
}