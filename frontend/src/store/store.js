import { configureStore } from '@reduxjs/toolkit';
import authSlice from './../features/auth/authSlice';
import passSlice from './../features/passwords/passSlice';

const store = configureStore({
  reducer: {
    // Add your reducers here
    auth: authSlice,
    passwords: passSlice,
  },
});

export default store;
