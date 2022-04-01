import "./App.css";
import Discussion from "./containers/Discussion/Discussion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Discussion />
    </div>
  );
}

export default App;

// 1. firestly we have to know HTTP request methods (GET, POST, PUT, DELETE, ...)(Google it)
// 2. We can use Fetch (We can send our requests to server) (Google it)
// 3. But there is a better way, and we can use axios library (Google it)
// 4. Now how we can get our DATABASES? We can use a Fake Database like (JSON Placeholder(jsonplaceholder.typicode.com))
// 5. Now install our axios -> npm i axios

// REACT TOASTIFY
// 1. // npm i react-toastify
// 2.  import { ToastContainer } from 'react-toastify'; import 'react-toastify/dist/ReactToastify.css'; in App component
// 3. Add  <ToastContainer /> in App function
// 4. import import { toast } from 'react-toastify'; in Discussion.js
