import { useEffect } from "react";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import "./discussion.css";
const Discussion = () => {
  // HOW TO GET DATA FROM BACKEND?
  // 1. useEffect () => http
  // 2. CDM => get (with first render we will get data from backend)

  // useEffect has a callback function and a dependency
  useEffect(() => {}, []);
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
