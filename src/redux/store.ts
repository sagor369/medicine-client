import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/auth/AuthSlice";
import { baseAPi } from "./api/BaseApi";
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
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "authRoot",
  storage,
};
const persistedReducer = persistReducer(persistConfig, AuthReducer);
export const store = configureStore({
  reducer: {
    [baseAPi.reducerPath]: baseAPi.reducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
        serializableCheck:{
            ignoredActions:[ FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER,]
        }
    }).concat(baseAPi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
