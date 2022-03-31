import { useState } from "react";
import "./newComment.css";
import axios from "axios";

const NewComment = ({ /*onAddPost*/ setComments }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });

  const changeHandler = (e) => {
    // To be sure if it works look in Console, Components and Network
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  const postCommentHandler = () => {
    axios
      // Now if we want to add to this data another thing (e.g postId)
      .post("http://localhost:3001/comments/", {
        ...comment,
        postId: 10,
      })
      // NOTICE don't forget to give res.data for the last pic here
      .then((res) => axios.get("http://localhost:3001/comments/"))
      .then((res) => setComments(res.data))
      .catch();
  };

  return (
    <div className="newComment">
      <div>
        <label>name</label>
        <input type="text" onChange={changeHandler} name="name" />
      </div>
      <div>
        <label>email</label>
        <input type="email" onChange={changeHandler} name="email" />
      </div>
      <div>
        <label>body</label>
        <input type="textarea" onChange={changeHandler} name="content" />
      </div>
      <button onClick={postCommentHandler}>Add New Comment</button>
    </div>
  );
};

export default NewComment;
