import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useEffect, useState } from 'react';

const transformProduct = (product) => {
	const DUMMY_PRODUCT = [];
	for (const key in product) {
		DUMMY_PRODUCT.push({
			id: key,
			title: product[key].title,
			price: product[key].price,
			description: product[key].description,
		});
	}
	return DUMMY_PRODUCT;
};

const Products = (props) => {
	const [products, setProduct] = useState([]);

	useEffect(() => {
		const fetchItem = async () => {
			const response = await fetch(
				'https://react-redux-1088a-default-rtdb.firebaseio.com/product.json',
			);
			const data = await response.json();
			const dataTransformed = await transformProduct(data);
			setProduct(dataTransformed);
		};
		fetchItem();
	}, []);

	const itemsList = products.map((item) => (
		<ProductItem
			key={item.id}
			id={item.id}
			title={item.title}
			price={item.price}
			description={item.description}
		/>
	));

	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>{itemsList}</ul>
		</section>
	);
};

export default Products;
