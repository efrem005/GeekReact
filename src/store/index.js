import {applyMiddleware, legacy_createStore as createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import rootReducer from "./reducer";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import {botMessage} from "./middleware/botMessage";
import logger from './middleware/logger'


const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk, logger, botMessage)))
export const persistor = persistStore(store)