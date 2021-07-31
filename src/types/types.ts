import { Items } from "./interfaces";

export type Inputs = {
  email: string;
  message: string;
};
export type ItemsState = {
  status: "loading" | "idle" | "error";
  error: string | null;
  items: Items;
};
