import React from 'react';
import { useAppSelector } from '../store/hooks';
import { Navigate } from 'react-router-dom';

const AuthWrapper = ({ children }) => {
  const { user } = useAppSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default AuthWrapper;
