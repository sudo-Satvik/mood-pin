import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "@/store/slices/search.slice.ts";
import collectionReducer from "@/store/slices/collection.slice.ts";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    collection: collectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
