import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";
import commentsReducer from "./commentsSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    comments: commentsReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {items: ItemsState, comments: CommentsState}
export type AppDispatch = typeof store.dispatch;
