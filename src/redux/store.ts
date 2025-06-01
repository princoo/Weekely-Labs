import { configureStore, combineSlices } from "@reduxjs/toolkit";
import { moviesSlice } from "../features/movies/moviesSlice";
import { watchlistSlice } from "../features/watchlist/watchlistSlice";
import storage from "redux-persist/lib/storage";
import {
  PERSIST,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import { searchIndicatorSlice } from "../features/search/searchIndicators";

const rootReducers = combineSlices(
  moviesSlice,
  watchlistSlice,
  searchIndicatorSlice
);
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["watchlist"],
};
const persistedReducers = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, REHYDRATE],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
