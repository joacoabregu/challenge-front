import { CommentsProps } from "../types/types";
import { Comment as CommentInterface } from "../types/interfaces";
import { useEffect, useState } from "react";
import "../styles/Comments.css";
import { useAppSelector, useAppDispatch } from "../state/hooks";
import {
  getComments,
  selectComments,
  selectStatus,
} from "../state/commentsSlice";
import { Comments as CommentsInterface } from "../types/interfaces";
import Spinner from "./Spinner";
import { getCurrentPagination } from "../helpers/functions";
import Pagination from "./Pagination";
import React from "react";
const Comment = React.lazy(() => import("./Comment"));

export default function Comments({ id }: CommentsProps) {
  let comments: CommentsInterface = useAppSelector(selectComments);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getComments(id));
  }, [dispatch, id]);

  let status = useAppSelector(selectStatus);
  useEffect(() => {
    if (status === "error") {
      dispatch(getComments(id));
    }
  }, [status, dispatch, id]);

  //State for current page for Pagination
  const [currentPage, setCurrentPage] = useState(1);
  //Set numbers of pages for Pagination
  const commentsPerPage: number = 4;
  const currentComments = getCurrentPagination(
    comments,
    currentPage,
    commentsPerPage
  );
  //Set current page for Pagination. Pass as props to Navigation component
  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  if (status === "error") {
    return (
      <div>
        <p>Se ha producido un error. Intente más tarde</p>
      </div>
    );
  }
  if (status === "loading") {
    return <Spinner />;
  }

  if (!comments.length) {
    return <p>No hay comentarios</p>;
  } else {
    return (
      <>
        <div className="comments">
          {currentComments.map((data: CommentInterface) => (
            <Comment comment={data} key={data.sent_at} />
          ))}
        </div>
        <Pagination
          perPage={commentsPerPage}
          total={comments.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </>
    );
  }
}
