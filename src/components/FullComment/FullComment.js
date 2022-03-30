import { useEffect, useState } from "react";
import "./fullComment.css";
import axios from "axios";
const FullComment = ({ commentId }) => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
      .then((res) => setComment(res.data))
      .catch();
  }, [commentId]);

  let commentDetail = <p>please select a comment!</p>;
  if (commentId) commentDetail = <p>LOADING.....</p>;

  if (commentId) {
    commentDetail = (
      <div className="fullComment">
        <p> {commentId.name}</p>
      </div>
    );
  }
  return commentDetail;
};

export default FullComment;
