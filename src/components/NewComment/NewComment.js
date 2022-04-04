import { useState } from "react";
import "./newComment.css";
import axios from "axios";

const NewComment = ({ setComments }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });

  const changeHandler = (e) => {
    // To be sure if it works look in Console, Components and Network
    setComment({ ...comment, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  // We write this function here and not in discussion component anymore
  const postCommentHandler = async () => {
    try {
      await axios
        // Now if we want to add to this data another thing (e.g postId)
        .post("/comments/", {
          ...comment,
          postId: 10,
        });
      const { data } = await axios.get("/comments/");
      setComments(data);
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
