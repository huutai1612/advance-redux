import { configureStore } from '@reduxjs/toolkit';
import { itemReducer } from './item';

const store = configureStore({
	reducer: { item: itemReducer },
});

export default store;
