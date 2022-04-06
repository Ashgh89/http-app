import "./comment.css";

const Comment = ({ name, email, onClick }) => (
  <div className="comment" onClick={onClick}>
    <p>name: {name}</p>
    <p>email: {email}</p>
  </div>
);

export default Comment;
