import http from "./httpService";

function getComments() {
  return http.get("/comments");
}

export default getComments;
