import { useState } from "react";
import "./newComment.css";
// import axios from "axios";
import { addNewComments } from "../services/addNewCommentService";
import { useNavigate } from "react-router-dom";
// import { getAllComments } from "../services/getAllCommentsService";

const NewComment = ({ setComments }) => {
  const navigate = useNavigate();

  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });
  // WE CAN DELETE NewComment2 and MOVE IT in PAGES, it is cleaner and fix it in routes.js as well
  const changeHandler = (e) => {
    // To be sure if it works look in Console, Components and Network
    setComment({ ...comment, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  // We write this function here and not in discussion component anymore
  const postCommentHandler = async () => {
    try {
      await addNewComments({ ...comment, postId: 10 });
      navigate("/");
      // const { data } = await getAllComments();
      // setComments(data);
    } catch (error) {}
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
