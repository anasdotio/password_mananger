import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import AuthWrapper from '../components/AuthWrapper';
const RegisterPage = lazy(() => import('../pages/auth/Register'));
const LoginPage = lazy(() => import('../pages/auth/Login'));
const PassLayout = lazy(() => import('../pages/Layout/PassLayout'));
const Passwords = lazy(() => import('../pages/passwords/Passwords'));
const AddPassword = lazy(() => import('../pages/passwords/AddPassword'));
const PasswordDetails = lazy(
  () => import('../pages/passwords/PasswordDetails'),
);

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
    element: (
      <AuthWrapper>
        <PassLayout />
      </AuthWrapper>
    ),
    children: [
      {
        path: '',
        element: <Passwords />,
        index: true,
      },
      {
        path: 'edit',
        element: <h1>hello edit password page</h1>,
      },
      {
        path: 'details',
        element: <PasswordDetails />,
      },
    ],
  },

  {
    path: '/',
    element: <Navigate to="/auth/login" />,
  },

  {
    path: '/add-password',
    element: <AddPassword />,
  },

  // {
  //   path: "/",
  //   element: <Navigate to="/auth/login" />,
  // },
]);

export default MainRouter;
