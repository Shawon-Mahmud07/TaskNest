import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Home/Home/Home";
import ErrorPage from "../Home/ErrorPage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import DashboardLayout from "../Dashboard/DashboardLayout";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Dashboard from "../Dashboard/Dashboard";
import ToDoList from "../Dashboard/ToDoList";

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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/user/dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    children: [
      {
        path: "/user/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/user/dashboard/ToDoList",
        element: <ToDoList></ToDoList>,
      },
    ],
  },
]);
export default router;
