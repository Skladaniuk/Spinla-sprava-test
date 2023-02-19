import { createSlice } from '@reduxjs/toolkit';

import CONST from 'const';
import { fetchUserList } from './fetchUserList';

const userListSlice = createSlice({
  name: 'userlist',
  initialState: {
    entities: [],
    isLoading: false,
    error: null,
    activeFields: CONST.defaultActiveFields,
  },
  reducers: {
    selectField: (state, action) => {
      const { fieldName, value } = action.payload;
      if (typeof fieldName === 'string' && typeof value === 'boolean') {
        state.activeFields = { ...state.activeFields, [fieldName]: value };
      }
    },
  },
  extraReducers: {
    [fetchUserList.fulfilled]: (state, action) => {
      return { ...state, entities: action.payload, isLoading: false };
    },
    [fetchUserList.pending]: state => {
      return { ...state, isLoading: true };
    },
  },
});

const { actions, reducer } = userListSlice;

export const { selectField } = actions;
export default reducer;
