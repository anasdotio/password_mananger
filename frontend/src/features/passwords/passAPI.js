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

export const createPassword = createAsyncThunk(
  'passwords/createPassword',
  async (passwordData, thunkAPI) => {
    try {
      const response = await axios.post('/api/passwords', passwordData);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);
