import { configureStore } from '@reduxjs/toolkit';
import { itemReducer } from './item';
import { cartReducer } from './cart';

const store = configureStore({
	reducer: { item: itemReducer, cart: cartReducer },
});

export default store;
