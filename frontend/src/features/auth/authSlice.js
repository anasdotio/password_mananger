import { createSlice } from '@reduxjs/toolkit';
import { authMe, register } from './authAPI';

const initialState = {
  user: null,
  loading: false,
  error: null,
  token: null,
  checkedAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(authMe.pending, (state) => {
        state.loading = true;
      })
      .addCase(authMe.fulfilled, (state, action) => {
        state.loading = false;
        state.checkedAuth = true;
        state.user = action.payload.data;
      })
      .addCase(authMe.rejected, (state, action) => {
        state.loading = false;
        state.checkedAuth = true;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
