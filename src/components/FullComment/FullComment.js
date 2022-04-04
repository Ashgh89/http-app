import { useEffect, useState } from "react";
import "./fullComment.css";
import axios from "axios";
const FullComment = ({ commentId, setComments }) => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:3001/comments/${commentId}`);
      const { data } = await axios.get("http://localhost:3001/comments/");
      setComments(data);
    } catch (error) {}
  };

  if (!commentId) return <p>Please select a comment!</p>;
  let commentDetail = <p>please select a comment!</p>;
  if (commentId) commentDetail = <p>LOADING.....</p>;

  if (comment) {
    commentDetail = (
      <div className="fullComment">
        <p> {comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    );
  }
  return commentDetail;
};

export default FullComment;
