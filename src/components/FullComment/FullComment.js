import { useEffect, useState } from "react";
import "./fullComment.css";
import axios from "axios";
import { deleteComment } from "../../services/deleteCommentService";
import { getAllComments } from "../../services/getAllCommentsService";
import { getOneComment } from "../../services/getOneCommentService";
const FullComment = ({ commentId, setComments, setSelectedId }) => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    // We can use then catch or async await/ egal
    if (commentId) {
      // axios
      //   .get(`/comments/${commentId}`)
      getOneComment(commentId)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  const deleteHandler = async () => {
    try {
      // await axios.delete(`/comments/${commentId}`);
      await deleteComment(commentId);

      // const { data } = await axios.get("/comments/");
      const { data } = getAllComments();

      setComments(data);
      setSelectedId(null);
      setComment(null);
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
