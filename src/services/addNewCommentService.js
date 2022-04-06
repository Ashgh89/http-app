import http from "./httpService";

export function addNewComments(data, token) {
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return http.post("/comments", data, header);
}
