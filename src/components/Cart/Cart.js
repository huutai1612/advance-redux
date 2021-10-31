import { Fragment } from 'react';
import Overlay from '../UI/OverLay';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import ReactDOM from 'react-dom';

const Cart = (props) => {
	const modalElement = document.getElementById('modal');
	const cartItem = (
		<Modal className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				<CartItem
					item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
				/>
			</ul>
		</Modal>
	);

	return (
		<Fragment>
			{ReactDOM.createPortal(<Overlay />, modalElement)}
			{ReactDOM.createPortal(cartItem, modalElement)}
		</Fragment>
	);
};

export default Cart;
