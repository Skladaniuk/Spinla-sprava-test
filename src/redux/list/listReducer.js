import { createSlice } from '@reduxjs/toolkit';
import { fetchList } from './listOperation';
import CONST from 'const';

const listSlice = createSlice({
  name: 'list',
  initialState: {
    entities: [],
    isLoading: false,
    error: null,
    activeFields: CONST.defaultActiveFields,
  },
  reducers: {
    selectField: (state, action) => {
      console.log(action.payload, ' --- PAYLOAaaaD');
      const { fieldName, value } = action.payload;
      if (typeof fieldName === 'string' && typeof value === 'boolean') {
        state.activeFields = { ...state.activeFields, [fieldName]: value };
      }
    },
  },
  extraReducers: {
    [fetchList.fulfilled]: (state, action) => {
      return { ...state, entities: action.payload, isLoading: false };
    },
    [fetchList.pending]: state => {
      return { ...state, isLoading: true };
    },
  },
});

const { actions, reducer } = listSlice;
export const { selectField } = actions;
export default reducer;
