import {combineReducers, createStore} from 'redux'
import messageReducer from "./reducer/messageReducer/messageReducer";
import chatReducer from "./reducer/chatReducer/chatReducer";
import counterReducer from "./reducer/counterReducer/counterReducer";

const rootStore = combineReducers({
    counter: counterReducer,
    message: messageReducer,
    chat: chatReducer
})

const store = createStore(rootStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store