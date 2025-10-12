import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axiosInstance';

export const register = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/register', data);

      console.log(response, 'response for api');

      return response.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const authMe = createAsyncThunk('auth/me', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/api/auth/me');

    console.log(response.data);

    return response.data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err.response.data);
  }
});
