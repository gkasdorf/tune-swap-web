import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import {persistStore} from "redux-persist";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    auth: authSlice,
    user: userSlice
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export const persistor = persistStore(store);