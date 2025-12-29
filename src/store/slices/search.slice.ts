import type { IMediaItem } from "@/types/interfaces";
import type { TSearchInitialState } from "@/types/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: TSearchInitialState = {
  query: "",
  activeTab: "photo",
  resultsByTab: {
    photo: [],
    video: [],
    gif: [],
  },
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setResults: (
      state,
      action: PayloadAction<{
        tab: "photo" | "video" | "gif";
        data: IMediaItem[];
      }>
    ) => {
      state.resultsByTab[action.payload.tab] = action.payload.data;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearResults(state) {
      state.resultsByTab = {
        photo: [],
        video: [],
        gif: [],
      };
    },
  },
});

export const {
  setQuery,
  setActiveTab,
  setResults,
  setLoading,
  setError,
  clearResults,
} = searchSlice.actions;
export default searchSlice.reducer;
