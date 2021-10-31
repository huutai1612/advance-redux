import { Fragment } from 'react';
import Overlay from '../UI/OverLay';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

const Cart = (props) => {
	const modalElement = document.getElementById('modal');
	const itemList = useSelector((state) => {
		return state.cartItem.item.map((item) => (
			<CartItem
				key={item.id}
				item={{
					id: item.id,
					title: item.title,
					quantity: item.quantity,
					price: item.price,
				}}
			/>
		));
	});

	const cartItem = (
		<Modal className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>{itemList}</ul>
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
