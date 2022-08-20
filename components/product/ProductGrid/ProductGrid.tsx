import styles from "./ProductGrid.module.css";

import { ProductCard } from "@components/product";
import Link from "next/link";
import products from "@components/data";

const ProductGrid = () => {
	return (
		<ul className={styles.grid}>
			{products.map((product, i) => (
				<li key={i}>
					<Link href={`/product/${product.id}`}>
						<a>
							<ProductCard {...product} />
						</a>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default ProductGrid;
