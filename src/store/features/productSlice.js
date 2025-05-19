import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productSlice.reducer; //exporting a reducer from a slice

