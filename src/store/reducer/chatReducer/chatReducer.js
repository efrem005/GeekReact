import { SET_NAME, ADD_CHAT_LIST, DELETE_ITEM } from './actionType'

const initialState = {
    chatItems: [
        {id: 1, name: 'chat 1'},
        {id: 2, name: 'chat 2'},
        {id: 3, name: 'chat 3'},
        {id: 4, name: 'chat 4'},
        {id: 5, name: 'chat 5'},
        {id: 6, name: 'chat 6'},
        {id: 7, name: 'chat 7'}
    ],
    name: ''
}

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME: {
            return {
                ...state,
                name: action.payload
            }
        }
        case ADD_CHAT_LIST:
            return {
                ...state,
                chatItems: [...state.chatItems, {id: Date.now(), name: state.name}],
                name: ''
            }
        case DELETE_ITEM: {
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