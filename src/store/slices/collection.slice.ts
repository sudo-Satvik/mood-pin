import type { ICollectionState } from "@/types/interfaces";
import { getInitialCollection } from "@/utils/redux";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState: ICollectionState = {
  items: getInitialCollection(),
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyExist = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!alreadyExist) {
        state.items.push(action.payload);
        localStorage.setItem("collection_mp", JSON.stringify(state.items));
      }
    },
    removeCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("collection_mp", JSON.stringify(state.items));
    },
    clearCollection: (state) => {
      state.items = [];
      localStorage.removeItem("collection_mp");
    },
    addedToast: () => {
      toast.success("Added to collection");
    },
    removeToast: () => {
      toast.info("Removed from collection");
    },
  },
});

export const { addCollection, removeCollection, clearCollection, addedToast } =
  collectionSlice.actions;
export default collectionSlice.reducer;
