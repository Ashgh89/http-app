import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import { toast } from "react-toastify";
import axios from "axios";
import "./discussion.css";
const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getComment = async () => {
      try {
        // With Object destructuring ({data})
        const { data } = await axios.get("http://localhost:3001/comments");
        setComments(data);
      } catch (error) {
        // console.log(error);
        setError(true);
      }
    };

    getComment();
  }, []);

  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };

  // const postCommentHandler = (comment) => {
  //   axios
  //     // Now if we want to add to this data another thing (e.g postId)
  //     .post("http://localhost:3001/comments/", {
  //       ...comment,
  //       postId: 10,
  //     })
  //
  //     .then((res) => axios.get("http://localhost:3001/comments/"))
  //     .then((res) => setComments(res.data))
  //     .catch();
  // };

  const renderComments = () => {
    // first loading..., after that useEffect(), after that comments, error (if there is an error)
    console.log("HAHAHA");
    let renderedValue = <p>Loading...</p>;
    if (error) {
      renderedValue = <p>Fetching data failed</p>;
      toast.error("there is an error");
    }

    if (comments && !error) {
      renderedValue = comments.map((c) => (
        <Comment
          key={c.id}
          name={c.name}
          email={c.email}
          onClick={() => selectCommentHandler(c.id)}
        />
      ));
    }

    return renderedValue;
  };

  return (
    <main>
      <section>{renderComments()}</section>
      <section>
        <FullComment
          commentId={selectedId}
          setComments={setComments}
          setSelectedId={setSelectedId}
        />
      </section>
      <section>
        <NewComment setComments={setComments} />
      </section>
    </main>
  );
};

export default Discussion;

// it gives us a local database, so we can manipulate it easily in our system (put, delete, post and so on...)
// So let's do it
// 1. npm install -g json-server
// 2. json-server --watch db.json --port 3001 (because our port 3000 is busy now 😋)
// 3. now we have db.json here automatically and we can put data in it.
// 4. now if we type http://localhost:3001/comments in browser, we have our data
// 5. now let's learn how to play with these data
// if it is not clear, watch video no 111
