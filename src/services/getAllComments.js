import http from "./httpService";

function getComments() {
  return http.get("/comments");
}

export default getComments;

// You can give arrow function as well,
// That'S really doesn't matter
