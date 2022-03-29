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
  const styles = {
    color: "#444",
    backgroundColor: "#efefef",
    padding: "10px",
  };
  if (!commentId) return <p style={styles}>Please Select a Comment</p>;
  return (
    <div className="fullComment">
      <p>name: {comment.name}</p>
      <p>email: {comment.email}</p>
      <p>{comment.body}</p>
    </div>
  );
};

export default FullComment;
