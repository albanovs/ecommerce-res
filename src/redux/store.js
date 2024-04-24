import { configureStore } from '@reduxjs/toolkit';
import filter from './filter/slice';
import cart from './cart/slice';
import pizza from './pizza/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});

export const RootState = store.getState;

export const useAppDispatch = () => useDispatch();
