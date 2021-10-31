import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
	item: [],
	totalAmount: 0,
};

const cartItemSlice = createSlice({
	name: 'cartItem',
	initialState,
	reducers: {
		addItem(state, action) {
			const oldState = current(state).item;
			const indexOfArray = oldState.findIndex(
				(item) => item.id === action.payload.id,
			);
			const existItem = oldState[indexOfArray];

			state.totalAmount = ++state.totalAmount;
			if (existItem) {
				state.item[indexOfArray].quantity =
					state.item[indexOfArray].quantity + 1;
				return;
			}
			state.item.push(action.payload);
		},
		removeItem(state, action) {
			const oldState = current(state).item;
			const indexOfArray = oldState.findIndex(
				(item) => item.id === action.payload,
			);
			const updatedItem = oldState[indexOfArray];
			if (updatedItem.quantity <= 1) {
				state.item.splice(indexOfArray, 1);
				state.totalAmount = --state.totalAmount;
				return;
			}
			state.totalAmount = --state.totalAmount;
			state.item[indexOfArray].quantity = state.item[indexOfArray].quantity - 1;
		},
	},
});

export const { reducer: cartItemReducer, actions: cartItemAction } =
	cartItemSlice;
