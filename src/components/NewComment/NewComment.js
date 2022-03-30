import { useState } from "react";
import "./newComment.css";
import axios from "axios";

const NewComment = () => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });
  const nameHandler = (e) => {
    setComment({ ...comment, name: e.target.value });
  };
  const emailHandler = (e) => {
    setComment({ ...comment, email: e.target.value });
  };
  const bodyHandler = (e) => {
    setComment({ ...comment, content: e.target.value });
  };
  const postCommentHandler = () => {
    // We want to send data to BACKEND
    // name, email, content, postId=10
    // create =>
    axios.post("https://jsonplaceholder.typicode.com/comments/", comment);
  };
  return (
    <div className="newComment">
      <div>
        <label>name</label>
        <input type="text" onChange={nameHandler} />
      </div>
      <div>
        <label>email</label>
        <input type="email" onChange={emailHandler} />
      </div>
      <div>
        <label>body</label>
        <input type="textarea" onChange={bodyHandler} />
      </div>
      <button onClick={postCommentHandler}>Add New Comment</button>
    </div>
  );
};

export default NewComment;
