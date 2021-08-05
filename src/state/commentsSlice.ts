import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import type { RootState } from "./store";
import { Comments } from "../types/interfaces";
import { CommentsState } from "../types/types";

const initialState = {
  comments: [],
  status: "idle",
} as CommentsState;

export const getComments = createAsyncThunk<Comments, string>(
  "comments/getComments",
  async (id) => {
    const url: string =
      "https://rooftop-api-rest-frontend.herokuapp.com/questions?item_id=" + id;
    const response: AxiosResponse = await axios.get(url);
    let data: Comments = await response.data;
    return data;
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComments.fulfilled, (state, { payload }) => {
      state.status = "idle";
      state.comments = payload;
    });
    builder.addCase(getComments.rejected, (state, { payload }) => {
      state.status = "error";
    });
    builder.addCase(getComments.pending, (state, { payload }) => {
      state.status = "loading";
    });
  },
});

export const selectComments = (state: RootState) => state.comments.comments;
export const selectStatus = (state: RootState) => state.comments.status;

export default commentsSlice.reducer;
