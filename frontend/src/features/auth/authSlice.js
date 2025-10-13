import { createSlice } from '@reduxjs/toolkit';
import { authMe, login, register } from './authAPI';

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
        state.error = action.payload?.message;
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
        state.error = action.payload?.message;
      });

    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      });
  },
});

export default authSlice.reducer;
