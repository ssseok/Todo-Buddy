import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";

import NotFound from "./pages/NotFound";
import Producer from "./pages/Producer";
import SignUp from "./pages/SignUp";
import WelCome from "./pages/WelCome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelCome />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/todo_list",
    element: <Main />,
  },
  {
    path: "/producer",
    element: <Producer />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
