import classes from './Overlay.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

const OverLay = (props) => {
	const dispatch = useDispatch();

	const closeCartHandler = () => {
		dispatch(cartActions.toggleCart());
	};

	return <div onClick={closeCartHandler} className={classes.overlay}></div>;
};

export default OverLay;
