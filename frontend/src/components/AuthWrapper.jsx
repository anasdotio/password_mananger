import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { authMe } from '../features/auth/authAPI';
import loaderGif from '..//assets/lock-and-key.gif';

const AuthWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const { user, loading, checkedAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user && !checkedAuth) {
      dispatch(authMe());
    }
  }, [user, dispatch, checkedAuth]);

  if (!checkedAuth) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#101922]">
        {/* <div className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div> */}

        <img
          className="w-20 mix-blend-color-burn"
          src={loaderGif}
          alt="loader"
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }


  return children;
};

export default AuthWrapper;
