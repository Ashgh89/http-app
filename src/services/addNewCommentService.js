import http from "./httpService";

// What are headers used for in HTTP?
// The HTTP headers are used to pass additional information between the
// clients and the server through the request and response header
export function addNewComments(data) {
  const token = "SECURE TOKEN";
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return http.post("/comments", data, header);
}
