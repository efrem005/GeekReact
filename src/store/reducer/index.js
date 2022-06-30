import {combineReducers} from "redux";

import messageReducer from "./messageReducer/messageReducer";
import chatReducer from "./chatReducer/chatReducer";
import counterReducer from "./counterReducer/counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    message: messageReducer,
    chat: chatReducer
})

export default rootReducer