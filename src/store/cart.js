import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: { isShow: false },
	reducers: {
		toggleCart(state) {
			state.isShow = !state.isShow;
		},
	},
});

export const { reducer: cartReducer, actions: cartActions } = cartSlice;
