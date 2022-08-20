import styles from "./ProductGrid.module.css";

import { ProductCard } from "@components/product";

const ProductGrid = () => {
	const products = [
		{
			title: "New Balance 574 Vintage Brights",
			imgSrc: "/product1.png",
			price: 650,
		},
		{
			title: "New Balance Made in UK 920 Chinese New Year",
			imgSrc: "/product2.png",
			price: 1200,
		},
		{
			title: "New Balance 373 Modern Classics",
			imgSrc: "/product3.png",
			price: 800,
		},
		{
			title: "New Balance X-Racer Utility",
			imgSrc: "/product4.png",
			price: 1000,
		},
		{
			title: "New Balance 5740 Think Colorfully",
			imgSrc: "/product5.png",
			price: 940,
		},
		{
			title: "New Balance Made in UK 670 Chinese New Year",
			imgSrc: "/product6.png",
			price: 780,
		},
	];

	return (
		<ul className={styles.grid}>
			{products.map((product, i) => (
				<li key={i}>
					<ProductCard {...product} />
				</li>
			))}
		</ul>
	);
};

export default ProductGrid;
