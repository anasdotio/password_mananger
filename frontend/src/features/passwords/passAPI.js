import axios from './../../api/axiosInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPasswords = createAsyncThunk(
  'passwords/getPasswords',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/passwords');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);
