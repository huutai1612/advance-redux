import { configureStore } from '@reduxjs/toolkit';
import { itemReducer } from './item';
import { cartReducer } from './cart';
import { cartItemReducer } from './cartItem';

const store = configureStore({
	reducer: { item: itemReducer, cart: cartReducer, cartItem: cartItemReducer },
});

export default store;
