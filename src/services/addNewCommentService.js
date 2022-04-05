import http from "./httpService";

function addNewComments() {
  return http.get("/comments");
}

export default addNewComments;
