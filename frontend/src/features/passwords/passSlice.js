import { createSlice } from '@reduxjs/toolkit';
import { getPasswords } from './passAPI';

const initialState = {
  passwords: [],
  loading: false,
  error: null,
};

const passSlice = createSlice({
  name: 'passwords',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPasswords.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPasswords.fulfilled, (state, action) => {
        state.loading = false;
        state.passwords = action.payload;
      })
      .addCase(getPasswords.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      });
  },
});

export default passSlice.reducer;
