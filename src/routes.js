import FullComment from "./components/FullComment/FullComment";
import HomePage from "./Pages/HomePage";
import NewComment2 from "./Pages/NewComment2";
import NotFound from "./Pages/NotFound";

// We must create HomePage.js and NewComment2 and NotFound.js
// So let'S do it in the next PIC
const routes = [
  { path: "/comment:id", element: <FullComment />, id: 2 },
  { path: "/", element: <HomePage />, id: 1 },
  { path: "/new-comment", element: <NewComment2 />, id: 2 },
  { path: "*", element: <NotFound />, id: 3 },
];

export default routes;

// In src folder we make a routes.js
