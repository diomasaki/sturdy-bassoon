import { configureStore, combineReducers } from "@reduxjs/toolkit"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PURGE,
    PERSIST,
    REGISTER
} from "redux-persist"

import storage from "redux-persist/lib/storage"
import userReducer from "./userRedux"


const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const rootReducers = combineReducers({ user: userReducer })

const persistedReducers = persistReducer(
    persistConfig,
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER]
        }
    })
})

export let persistor = persistStore(store)


