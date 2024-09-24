import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';
import userAccountReducer from './UserAccountSlice';

const store = configureStore({
  reducer: {
    user: userReducer, // Add your user slice reducer here
    cart: userAccountReducer, // Add your cart reducer here
  },
});

export default store;
