import HomePage from "./Pages/HomePage";
import NewComment2 from "./Pages/NewComment2";
import NotFound from "./Pages/NotFound";

const routes = [
  { path: "/", element: <HomePage />, id: 1 },
  { path: "/new-comment", element: <NewComment2 />, id: 2 },
  { path: "*", element: <NotFound />, id: 3 },
];

export default routes;

// :id (: semi colon makes your id dynamic)
