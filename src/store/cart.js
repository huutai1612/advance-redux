import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: { isShow: false },
	reducers: {
		showCart(state) {
			state.isShow = true;
		},
		hideCart(state) {
			state.isShow = false;
		},
	},
});

export const { reducer: cartReducer, action: cartActions } = cartSlice;
