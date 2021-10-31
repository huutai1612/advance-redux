import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {
	const amountItem = useSelector((state) => state.cartItem.totalAmount);

	return (
		<button onClick={props.onClick} className={classes.button}>
			<span>My Cart</span>
			<span className={classes.badge}>{amountItem}</span>
		</button>
	);
};

export default CartButton;
