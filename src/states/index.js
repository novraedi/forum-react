import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import detailThreadReducer from './detailThread/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    detailThread: detailThreadReducer,
    isPreload: isPreloadReducer,
    threads: threadsReducer,
    users: usersReducer,
  },
});

export default store;
