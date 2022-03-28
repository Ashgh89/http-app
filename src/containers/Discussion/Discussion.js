import { useEffect } from "react";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import axios from "axios";
import "./discussion.css";
const Discussion = () => {
  // HOW TO GET DATA FROM BACKEND?
  // 1. useEffect () => http
  // 2. CDM => get (with first render we will get data from backend)

  // Now let's get data from backend
  // useEffect has a callback function and a dependency
  useEffect(() => {
    // SO when we use get (for promise), after that we use these 2 methods -> then or catch
    // then () is when our promise has not any problem
    // catch () is when our catch has problem
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(() => {})
      .catch(() => {});
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
