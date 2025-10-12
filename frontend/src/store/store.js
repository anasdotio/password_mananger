import { configureStore } from '@reduxjs/toolkit';
import authSlice from './../features/auth/authSlice';

const store = configureStore({
  reducer: {
    // Add your reducers here
    auth: authSlice,
  },
});

export default store;
