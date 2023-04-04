import {configureStore} from '@reduxjs/toolkit';
import MyProductReducer from './MyProductSlice';
import MyCartReducer from './MyCartSlice';

export const myStore = configureStore({
  reducer: {
    product: MyProductReducer,
    cart: MyCartReducer,
  },

  //Adding by me to avoid error like:- Non-serializable value detected...
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
