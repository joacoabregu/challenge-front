import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import type { RootState } from "./store";
import { Items } from "../types/interfaces";
import { ItemsState } from "../types/types";

const initialState = {
  items: [],
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
      state.items = payload;
    });
    builder.addCase(getItems.rejected, (state, { payload }) => {
      state.status = "error";
    });
    builder.addCase(getItems.pending, (state, { payload }) => {
      state.status = "loading";
    });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectItems = (state: RootState) => state.items.items;
export const selectStatus = (state: RootState) => state.items.status;

export default itemsSlice.reducer;
