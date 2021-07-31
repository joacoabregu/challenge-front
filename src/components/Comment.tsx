import {CommentProps} from "../types/types"
export default function Comment({ comment }: CommentProps) {
  return (
    <div key={comment.sent_at}>
      <p>{comment.question} </p>
      <p>{comment.answer} </p>
      <p>{comment.sent_at} </p>
    </div>
  );
}