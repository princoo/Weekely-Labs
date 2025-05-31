import type { Movie } from "../../types/movie";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface MovieSliceState {
  search: string;
  // genre: string;
  page: number;
  filters: {
    [key: string]: string | number | boolean;
  };
  movies: Movie[];
}

const initialState: MovieSliceState = {
  search: "",
  // genre: '',
  page: 1,
  filters: {
    list: "top_boxoffice_200",
    info: "base_info",
  },
  movies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    // setGenre: (state, action: PayloadAction<string>) => {
    //   state.genre = action.payload;
    // },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setFilter: (
      state,
      action: PayloadAction<{ key: string; value: string | number | boolean }>
    ) => {
      state.filters[action.payload.key] = action.payload.value;
    },
    removeFilter: (state, action: PayloadAction<string>) => {
      delete state.filters[action.payload];
    },
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
    editFilter: (
      state,
      action: PayloadAction<{ key: string; value: string | number | boolean }>
    ) => {
      if (
        Object.prototype.hasOwnProperty.call(state.filters, action.payload.key)
      ) {
        state.filters[action.payload.key] = action.payload.value;
      }
      else{
        state.filters[action.payload.key] = action.payload.value;
      }
    },
  },
});

export const { setSearch, setPage, setFilter, removeFilter, setMovies,editFilter } =
  moviesSlice.actions;
export default moviesSlice.reducer;
