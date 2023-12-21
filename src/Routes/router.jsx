import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Home/Home/Home";
import ErrorPage from "../Home/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;
