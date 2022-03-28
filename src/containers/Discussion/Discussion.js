import { useEffect } from "react";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import axios from "axios";
import "./discussion.css";
const Discussion = () => {
  // If status was :
  // in range of 200 -> everything ok
  // 301, 302 -> redirect
  // 401 -> unAuthorized / 402, 403 -> noe access / 404 -> not found
  // in range of 500 -> is in backend and server, that'S not my problem
  useEffect(() => {
    // SO when we use get (for promise), after that we use these 2 methods -> then or catch
    // then () is when our promise has not any problem
    // catch () is when our catch has problem
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <main>
      <section>
        <Comment />
        <Comment />
        <Comment />
      </section>
      <section>
        <FullComment />
      </section>
      <section>
        <NewComment />
      </section>
    </main>
  );
};

export default Discussion;
