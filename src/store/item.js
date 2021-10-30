import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		id: Math.ceil(Math.random() * 100),
		title: 'Iphone 6',
		description: 'The first popular iphone',
		price: 300,
	},
	{
		id: Math.ceil(Math.random() * 100),
		title: 'Iphone 7',
		description: 'The second popular iphone',
		price: 400,
	},
	{
		id: Math.ceil(Math.random() * 100),
		title: 'Iphone 8',
		description: 'The third popular iphone',
		price: 500,
	},
	{
		id: Math.ceil(Math.random() * 100),
		title: 'Iphone 9',
		description: 'The four popular iphone',
		price: 600,
	},
];

const itemSlice = createSlice({
	name: 'item',
	initialState,
	reducers: {
		addItem(state, action) {
			state.item.push(action.payload.item);
		},
	},
});

export const { action: itemAction, reducer: itemReducer } = itemSlice;
