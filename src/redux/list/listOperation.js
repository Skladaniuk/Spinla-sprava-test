import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchList = createAsyncThunk(
  'list/fetchList',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(
        'https://api.json-generator.com/templates/sqo7JH4It1IT/data?access_token=66g66vr0pjjihitvcdwdyfuetiq1joe8kmt68vkq'
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
