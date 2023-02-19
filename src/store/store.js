import { configureStore } from '@reduxjs/toolkit';

import userListReducer from './userlist/userListReducer';

export const store = configureStore({
  reducer: {
    userList: userListReducer,
  },
});
