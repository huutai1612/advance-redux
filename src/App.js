import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
// import { cartActions } from './store/cart';
import { sendCartData, fetchCartData } from './store/cart-actions';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';

let isInitial = true;

function App() {
	const isShowCart = useSelector((state) => state.cart.isShow);
	const selectedCart = useSelector((state) => state.cartItem);
	const notification = useSelector((state) => state.cart.notification);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCartData());
	}, [dispatch]);

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}
		if (selectedCart.changed) {
			dispatch(sendCartData(selectedCart));
		}
		// const sendCartData = async () => {

		// dispatch(
		// 	cartActions.showNotification({
		// 		status: 'Pending...',
		// 		title: 'Sending...',
		// 		message: 'Sending cart data',
		// 	}),
		// );

		// const response = await fetch(
		// 	`https://react-redux-1088a-default-rtdb.firebaseio.com/cart.json`,
		// 	{
		// 		method: 'PUT',
		// 		body: JSON.stringify(selectedCart),
		// 	},
		// );

		// if (!response.ok) {
		// 	throw new Error('Having some issue when trying to send cart data');
		// }

		// dispatch(
		// 	cartActions.showNotification({
		// 		status: 'success',
		// 		title: 'Success',
		// 		message: 'Sent cart data successfully',
		// 	}),
		// );
		// };

		// sendCartData().catch((error) => {
		// 	dispatch(
		// 		cartActions.showNotification({
		// 			status: 'error',
		// 			title: 'Error',
		// 			message: 'Error when sending cart data',
		// 		}),
		// 	);
		// });
	}, [selectedCart, dispatch]);

	return (
		<Fragment>
			{notification && (
				<Notification
					title={notification.title}
					status={notification.status}
					message={notification.message}
				/>
			)}
			<Layout>
				{isShowCart && <Cart />}
				<Products />
			</Layout>
		</Fragment>
	);
}

export default App;
