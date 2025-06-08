import { configureStore, combineSlices } from "@reduxjs/toolkit";
import { moviesSlice } from "../features/movies/moviesSlice";
import { watchlistSlice } from "../features/watchlist/watchlistSlice";
import { reviewsSlice } from "../features/review/reviewSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
} from "redux-persist";
import { searchIndicatorSlice } from "../features/search/searchIndicators";

const rootReducers = combineSlices(
  moviesSlice,
  watchlistSlice,
  searchIndicatorSlice,
  reviewsSlice
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
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducers,
    preloadedState
  })
}
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = typeof store.dispatch;
