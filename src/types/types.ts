import { Item, Items } from "./interfaces";
import { Comment } from "./interfaces";

export type Inputs = {
  email: string;
  message: string;
};
export type ItemsState = {
  status: "loading" | "idle" | "error";
  items: Items;
};

export type CommentProps = {
  comment: Comment;
};

export type CommentsProps = {
  id: string;
};

export type ItemProps = {
  item: Item;
};

export type PaginationProps = {
  perPage: number;
  total: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
};
