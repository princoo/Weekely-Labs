import type { Movie } from "../../types/movie";
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface WatchListSliceState {
    favorites: Movie[];
}

const initialState: WatchListSliceState = {
    favorites: []
}

export const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(movie => movie._id !== action.payload);
    },
  },
})

export const { addFavorite, removeFavorite } = watchlistSlice.actions
export default watchlistSlice.reducer