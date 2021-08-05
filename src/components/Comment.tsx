import { CommentProps } from "../types/types";
import "../styles/Comment.css";
import { commentDateFormat } from "../helpers/functions";
export default function Comment({ comment }: CommentProps) {
  let date: string = commentDateFormat(comment.sent_at);
  return (
    <div className="comment" key={comment.sent_at}>
      <p className="comment-question">{comment.question} </p>
      <p>{comment.answer} </p>
      <p className="comment-date">{date} </p>
    </div>
  );
}
