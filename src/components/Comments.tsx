import Comment from "./Comment";
import { CommentsProps } from "../types/types";
import { Comment as CommentInterface } from "../types/interfaces";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

export default function Comments({ id }: CommentsProps) {
  let [comments, setComments] = useState<CommentInterface[] | []>([]);
  const url: string =
    "https://rooftop-api-rest-frontend.herokuapp.com/questions";
  useEffect(() => {
    let urlGET: string = url + "?item_id=" + id;
    axios
      .get(urlGET)
      .then((response: AxiosResponse) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!comments.length) {
    return <p>No hay comentarios</p>;
  } else {
    return (
      <>
        {comments.map((data: CommentInterface) => (
          <Comment comment={data} />
        ))}
      </>
    );
  }
}
