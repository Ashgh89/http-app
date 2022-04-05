import http from "./httpService";

export function addNewComments() {
  return http.get("/comments");
}
