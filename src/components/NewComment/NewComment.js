import { useState } from "react";
import "./newComment.css";
import axios from "axios";

const NewComment = ({ onAddPost }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });
  // const nameHandler = (e) => {
  //   setComment({ ...comment, name: e.target.value });
  // };
  // const emailHandler = (e) => {
  //   setComment({ ...comment, email: e.target.value });
  // };
  // const bodyHandler = (e) => {
  //   setComment({ ...comment, content: e.target.value });
  // };

  const changeHandler = (e) => {
    // To be sure if it works look in Console, Components and Network
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  // const postCommentHandler = () => {
  //   // We want to send data to BACKEND
  //   // name, email, content, postId=10
  //   // create =>
  //   // NOTICE axios is not exactly like json, it says send an object and dont worry i'll do the rest (like stringify)
  //   axios
  //     // Now if we want to add to this data another thing (e.g postId)
  //     .post("http://localhost:3001/comments/", {
  //       ...comment,
  //       postId: 10,
  //     })
  //     // NOTICE don't forget to give res.data for the last pic here
  //     .then((res) => console.log(res.data))
  //     .catch();
  // };
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
      <button onClick={() => onAddPost(comment)}>Add New Comment</button>
    </div>
  );
};

export default NewComment;
