import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart';
import { cartItemReducer } from './cartItem';

const store = configureStore({
	reducer: { cart: cartReducer, cartItem: cartItemReducer },
});

export default store;
