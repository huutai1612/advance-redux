import { createSlice } from '@reduxjs/toolkit';
import { cartActions } from './cart';

const initialState = {
	item: [],
	totalAmount: 0,
};

const cartItemSlice = createSlice({
	name: 'cartItem',
	initialState,
	reducers: {
		addItem(state, action) {
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
	},
});

// This is how we can create action creator is supported by redux to handling our async logic to help us make our component more cleaner

export const sendCartData = (cart) => {
	//This function will receive our cart data
	//dispatch is auto accept if we use dispatch this function this is the method redux support for our create action creator thunk
	return async (dispatch) => {
		// In this return function it will automatically receive dispatch as parameter
		dispatch(
			cartActions.showNotification({
				status: 'Pending...',
				title: 'Sending...',
				message: 'Sending cart data',
			}),
		);

		const sendRequest = async () => {
			const response = await fetch(
				`https://react-redux-1088a-default-rtdb.firebaseio.com/cart.json`,
				{
					method: 'PUT',
					body: JSON.stringify(cart),
				},
			);
			if (!response.ok) {
				throw new Error('Having some issue when trying to send cart data');
			}
		};
		try {
			sendRequest();

			dispatch(
				cartActions.showNotification({
					status: 'success',
					title: 'Success',
					message: 'Sent cart data successfully',
				}),
			);
		} catch (error) {
			dispatch(
				cartActions.showNotification({
					status: 'error',
					title: 'Error',
					message: 'Error when sending cart data',
				}),
			);
		}
	};
};

export const { reducer: cartItemReducer, actions: cartItemAction } =
	cartItemSlice;
