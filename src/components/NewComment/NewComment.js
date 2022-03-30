import { useState } from "react";
import "./newComment.css";

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
    </div>
  );
};

export default NewComment;
