import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <p>
        404
        <br />
        This is the NotFound
      </p>
      <Link to="/">Go to home page</Link>
    </>
  );
};

export default NotFound;
