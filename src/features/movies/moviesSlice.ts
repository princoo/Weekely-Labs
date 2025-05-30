import type { Movie } from "../../types/movie";
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface MovieSliceState {
    search: string;
    genre: string;
    page: number;
    filters: string[];
    movies: Movie[];

}

const initialState: MovieSliceState = {
    search: '',
    genre: '',
    page: 1,
    filters: [],
    movies: []
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setFilters: (state, action: PayloadAction<string[]>) => {
      state.filters = action.payload;
    },
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
  },
})

export const { setSearch, setGenre, setPage, setFilters, setMovies } = moviesSlice.actions
export default moviesSlice.reducer