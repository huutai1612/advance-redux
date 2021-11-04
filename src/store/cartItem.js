import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	item: [],
	totalAmount: 0,
	changed: false,
};

const cartItemSlice = createSlice({
	name: 'cartItem',
	initialState,
	reducers: {
		addItem(state, action) {
			state.changed = true;
			// const oldState = current(state).item;
			// const indexOfArray = oldState.findIndex(
			// 	(item) => item.id === action.payload.id,
			// );
			// const existItem = oldState[indexOfArray];
			state.totalAmount = ++state.totalAmount;
			// if (existItem) {
			// 	state.item[indexOfArray].quantity =
			// 		state.item[indexOfArray].quantity + 1;
			// 	return;
			// }
			// state.item.push(action.payload);
			// ---------------------------- This is how Max interact with the old state of redux toolkit  ------------------------------------
			const id = action.payload.id;
			const existItem = state.item.find((item) => item.id === id);
			if (existItem) {
				existItem.quantity++;
			} else {
				state.item.push(action.payload);
			}
		},
		removeItem(state, action) {
			state.changed = true;
			// const oldState = current(state).item;
			// const indexOfArray = oldState.findIndex(
			// 	(item) => item.id === action.payload,
			// );
			// const updatedItem = oldState[indexOfArray];
			// if (updatedItem.quantity <= 1) {
			// 	state.item.splice(indexOfArray, 1);
			// 	state.totalAmount = --state.totalAmount;
			// 	return;
			// }
			state.totalAmount = --state.totalAmount;
			// state.item[indexOfArray].quantity = state.item[indexOfArray].quantity - 1;
			// ---------------------------- This is how Max interact with the old state of redux toolkit  ------------------------------------
			const id = action.payload;
			const existItem = state.item.find((item) => item.id === id);
			if (existItem.quantity <= 1) {
				state.item = state.item.filter((item) => item.id !== id);
			} else {
				existItem.quantity--;
			}
		},
		setCartData(state, action) {
			if (!action.payload.item) {
				state.item = [];
			} else {
				state.item = action.payload.item;
			}
			state.totalAmount = action.payload.totalAmount;
		},
	},
});

export const { reducer: cartItemReducer, actions: cartItemAction } =
	cartItemSlice;
