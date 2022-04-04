import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

// You can give your export like that,
// But there is a problem ->
// What if we say we don't want to use axios?
// And we must delete export default axios and that's Aufwändig
// export default axios;
// So what to do?
const http = {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};

export default http;
