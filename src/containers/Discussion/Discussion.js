import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import axios from "axios";
import "./discussion.css";
const Discussion = () => {
  const [comments, setComments] = useState(null);

  // Now let's get data from backend
  // useEffect has a callback function and a dependency
  useEffect(() => {
    // SO when we use get (for promise), after that we use these 2 methods -> then or catch
    // then () is when our promise has not any problem
    // catch () is when our catch has problem
    // axios
    //   .get("https://jsonplaceholder.typicode.com/comments")
    //   .then((response) => {
    //     // console.log(response);
    //     setComments(response.data.slice(0, 4));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    getComment();
  }, []);

  // THERE IS A ANOTHER WAY TO GET DATA FROM SERVER AND BACKEND
  // Async - Await
  async function getComment() {
    // Without Object destructuring ({data})
    //  const myData = await axios.get(
    //   "https://jsonplaceholder.typicode.com/comments"
    // );
    // setComments(myData.data.slice(0, 4));
    try {
      // With Object destructuring ({data})
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setComments(data.slice(0, 4));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <section>
        {comments ? (
          comments.map((c) => (
            <Comment key={c.id} name={c.name} email={c.email} />
          ))
        ) : (
          <p>Loading...</p>
        )}
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
