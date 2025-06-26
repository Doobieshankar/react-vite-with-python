/* import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlices";
import authReducer from "./slices/authSlice";

const rootReducer = combineReducers({
  productsState: productsReducer,
  authState: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }), // no need to import it manually
});

export default store;
 */

// store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlices";
import authReducer from "./slices/authSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage"; // defaults to localStorage

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authState"], // only authState will be persisted
};

// Combine your reducers
const rootReducer = combineReducers({
  productsState: productsReducer,
  authState: authReducer,
});

// Wrap combined reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer and required middleware
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
