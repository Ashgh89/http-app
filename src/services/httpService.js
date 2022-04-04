import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

// You can give your export like that,
// But there is a problem ->
// What if we say we don't want to use axios?
// And we must delete export default axios and that's Aufwändig
// export default axios;
// So what to do?

// Firstly (Write our baseURL in just one file)
// We know about axios so far, but in real projects,
// we have many function that are relevant to backend.
// SO we try to write clean codes which are relevant to API and backend
// So what if for example if our http://localhost:3001 change?
// So we have to change all of them and that'S not good.
// So we can write it here and if we want to change it, we can change just here easily.

// Secondly (Error Handling)
//
const http = {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};

export default http;
