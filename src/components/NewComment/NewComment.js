import { useState } from "react";
import "./newComment.css";
import axios from "axios";
import { addNewComments } from "../../services/addNewCommentService";
import { getAllComments } from "../../services/getAllCommentsService";

const NewComment = ({ setComments }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [comment1, setComment1] = useState("");

  const changeHandler = (e) => {
    // To be sure if it works look in Console, Components and Network
    setComment({ ...comment, [e.target.name]: e.target.value });
    console.log(e.target.value);
    setComment1("123");
  };

  // We write this function here and not in discussion component anymore
  const postCommentHandler = async () => {
    try {
      await addNewComments({ ...comment, postId: 10 });
      // await axios
      //   // Now if we want to add to this data another thing (e.g postId)
      //   .post("/comments/", {
      //     ...comment,
      //     postId: 10,
      //   });
      // const { data } = await axios.get("/comments/");
      const { data } = await getAllComments();

      setComments(data);
    } catch (error) {}
  };

  return (
    <div className="newComment">
      <div>
        <label>{comment1}name</label>
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
