import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
// HTTP messages are how data is exchanged between a server and a client.
// There are two types of messages:
// requests sent by the client to trigger an action on the server,
// and responses, the answer from the server.

// request - response
axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);

const http = {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};
// With this const http object, we don't need anymore to write axios in all components
// And this object has different properties abd we can import it in our components

export default http;
