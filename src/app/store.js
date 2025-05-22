import { configureStore } from '@reduxjs/toolkit';
import productReducer, { productFetch } from '../features/productSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

store.dispatch(productFetch());

export default store;
