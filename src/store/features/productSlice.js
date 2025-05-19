import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  status: null,
  error: null,
};

//action creators
// export const productFetch = createAsyncThunk(
//   'products/productsFetch',
//   async (id = null, thunkAPI) => {
//     try {
//       const response = await axios.get('http://localhost:5000/products2');
//       return response?.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// const productSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(productFetch.pending, (state) => {
//         state.status = 'Pending';
//       })
//       .addCase(productFetch.fulfilled, (state, action) => {
//         state.status = 'Success';
//         state.items = action.payload;
//       })
//       .addCase(productFetch.rejected, (state, { error }) => {
//         state.status = 'Rejected';
//         state.error = error.message;
//       });
//   },
// });

export const productFetch = createAsyncThunk(
  'products/productsFetch',
  async () => {
    const response = await axios.get('http://localhost:5000/products2');
    return response?.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productFetch.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(productFetch.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload;
      })
      .addCase(productFetch.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export default productSlice.reducer; //exporting a reducer from a slice
