import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import CONST from 'const';

export const fetchUserList = createAsyncThunk(
  'userlist/fetchUserList',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(CONST.API);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
