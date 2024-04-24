import { createSlice } from '@reduxjs/toolkit';
import { fetchPizzas } from './asyncActions';

const initialState = {
  items: [],
  status: 'loading', // loading | success | error
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = 'loading';
      state.items = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'completed';
    });

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
