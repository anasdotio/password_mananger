import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
const RegisterPage = lazy(() => import("../pages/auth/Register"));

const MainRouter = createBrowserRouter([
  {
    path: "/auth/register",
    element: <RegisterPage />,
  },

  {
    path: "/auth/login",
    element: <h1>Login</h1>,
  },

  // {
  //   path: "/",
  //   element: <Navigate to="/auth/login" />,
  // },
]);

export default MainRouter;
