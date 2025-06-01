import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SearchSliceState {
  loading: boolean;
  error: string | null;
}

const initialState: SearchSliceState = {
  loading: false,
  error: null,
};

export const searchIndicatorSlice = createSlice({
  name: "searchIndicators",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setError, setLoading } = searchIndicatorSlice.actions;
export default searchIndicatorSlice.reducer;
