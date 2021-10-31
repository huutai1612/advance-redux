import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

function App() {
	const isShowCart = useSelector((state) => state.cart.isShow);
	return (
		<Fragment>
			<Layout>
				{isShowCart && <Cart />}
				<Products />
			</Layout>
		</Fragment>
	);
}

export default App;
