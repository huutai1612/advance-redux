import { cartActions } from './cart';
import { cartItemAction } from './cartItem';

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
					body: JSON.stringify({
						item: cart.item,
						totalAmount: cart.totalAmount,
					}),
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

export const fetchCartData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(
				`https://react-redux-1088a-default-rtdb.firebaseio.com/cart.json`,
			);
			if (!response.ok) {
				throw new Error('Some thing went wrong when fetching cart data');
			}
			const data = await response.json();
			return data;
		};
		try {
			const cartData = await fetchData();
			dispatch(
				cartItemAction.setCartData({
					// where we can put a logic in here if cartData.item is undefined we can set an empty array
					item: cartData.item || [],
					totalAmount: cartData.totalAmount,
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
