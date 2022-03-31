import { useEffect, useState } from "react";
import "./fullComment.css";
import axios from "axios";
const FullComment = ({ commentId }) => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:3001/comments/${commentId}`)
      .then((res) => {
        // e.g we have 10 user => id:1 => axios.delte()=> now we have 9 user => res.data=9, now with setState we show it to user the updated data
        // so we need the states that are in Discussion.js component
      })
      .catch((err) => console.log(err));
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
