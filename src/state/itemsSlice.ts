import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import type { RootState } from "./store";
import { Item, Items } from "../types/interfaces";



type ItemsState = {
  // In `status` we will watch
  // if todos are being loaded.
  status: "loading" | "idle" | "error";

  // `error` will contain an error message.
  error: string | null;
  items: Items;
};
const initialState = {
  items: [],
  error: null,
  status: "idle",
} as ItemsState;

export const getItems = createAsyncThunk<Items>("items/getItems", async () => {
  const response: AxiosResponse = await axios.get(
    "https://rooftop-api-rest-frontend.herokuapp.com/items"
  );

  let data: Items = await response.data.items;
  return data;
});

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getItems.fulfilled, (state, { payload }) => {
      state.status = "idle";

      state.items.push(...payload);
    });
    builder.addCase(getItems.rejected, (state, { payload }) => {
      state.status = "error";
    });
    builder.addCase(getItems.pending, (state, { payload }) => {
      state.status = "loading";
    });
  },
});

//export const { increment } = itemsSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectItems = (state: RootState) => state.items.items;
export const selectStatus = (state: RootState) => state.items.status;

export default itemsSlice.reducer;
