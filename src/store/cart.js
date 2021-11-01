import { createSlice } from '@reduxjs/toolkit';

const initialState = { isShow: false, notification: null };

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		toggleCart(state) {
			state.isShow = !state.isShow;
		},
		showNotification(state, action) {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			};
		},
	},
});

export const { reducer: cartReducer, actions: cartActions } = cartSlice;
