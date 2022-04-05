import http from "./httpService";

export function getAllComments() {
  return http.get("/comments");
}

// You can give arrow function as well,
// That'S really doesn't matter

//NOTICE You cannot say export default getAllComments.
// Why? because you want to export just the function
// So in discussion.js you import it with {}

/*// Three different export styles
export foo;
export default foo;
export = foo;

// The three matching import styles
import {foo} from 'blah';
import foo from 'blah';
import * as foo from 'blah'; */
