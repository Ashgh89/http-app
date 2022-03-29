import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import axios from "axios";
import "./discussion.css";
const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  // Now let's get data from backend
  // useEffect has a callback function and a dependency
  // THERE IS A ANOTHER WAY TO GET DATA FROM SERVER AND BACKEND
  // Async - Await
  useEffect(() => {
    const getComment = async () => {
      try {
        // With Object destructuring ({data})
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setComments(data.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    };

    getComment();
  }, []);

  const selectCommentHandler = (id) => {
    // console.log(id);
    setSelectedId(id);
  };

  return (
    <main>
      <section>
        {comments ? (
          comments.map((c) => (
            <Comment
              key={c.id}
              name={c.name}
              email={c.email}
              onClick={() => selectCommentHandler(c.id)}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>
      <section>
        <FullComment commentId={selectedId} />
      </section>
      <section>
        <NewComment />
      </section>
    </main>
  );
};

export default Discussion;
