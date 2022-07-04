import {combineReducers} from "redux";

import messageReducer from "./messageReducer/messageReducer";
import chatReducer from "./chatReducer/chatReducer";
import counterReducer from "./counterReducer/counterReducer";
import usersReducer from "./usersReducer/usersReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    message: messageReducer,
    chat: chatReducer,
    users: usersReducer
})

export default rootReducer