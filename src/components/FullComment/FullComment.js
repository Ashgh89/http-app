import { useEffect, useState } from "react";
import "./fullComment.css";
import axios from "axios";
const FullComment = ({ commentId }) => {
  console.log(commentId);
  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (commentId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  if (!commentId) return <p>Please select a comment!</p>;
  let commentDetail = <p>please select a comment!</p>;
  if (commentId) commentDetail = <p>LOADING.....</p>;

  if (comment) {
    commentDetail = (
      <div className="fullComment">
        <p> {comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
      </div>
    );
  }
  return commentDetail;
};

export default FullComment;
