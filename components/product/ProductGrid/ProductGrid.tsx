import styles from "./ProductGrid.module.css";
import { ProductCard } from "@components/product";
import { products } from "@lib/data";
import Link from "next/link";
import { motion } from "framer-motion";

const ProductGrid = () => {
	return (
		<motion.ul layout className={styles.grid}>
			{products.map((product, i) => (
				<li key={i}>
					<Link href={`/product/${product.id}`}>
						<a>
							<ProductCard {...product} />
						</a>
					</Link>
				</li>
			))}
		</motion.ul>
	);
};

export default ProductGrid;
