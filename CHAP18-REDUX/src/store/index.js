import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

//merging states
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
