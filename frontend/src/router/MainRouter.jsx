import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
const RegisterPage = lazy(() => import('../pages/auth/Register'));
const LoginPage = lazy(() => import('../pages/auth/Login'));
const PassLayout = lazy(() => import('../pages/Layout/PassLayout'));

const MainRouter = createBrowserRouter([
  {
    path: '/auth/register',
    element: <RegisterPage />,
  },

  {
    path: '/auth/login',
    element: <LoginPage />,
  },

  {
    path: '/passwords',
    element: <PassLayout />,
    children: [
      {
        path: '',
        element: <h1>hello</h1>,
        index: true,
      },
      {
        path: 'edit',
        element: <h1>hello edit password page</h1>,
      },
    ],
  },

  {
    path: '*',
    element: <Navigate to="/auth/login" />,
  },

  // {
  //   path: "/",
  //   element: <Navigate to="/auth/login" />,
  // },
]);

export default MainRouter;
