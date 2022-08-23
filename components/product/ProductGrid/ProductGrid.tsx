import styles from "./ProductGrid.module.css";
import { ProductCard } from "@components/product";
import { products } from "@lib/data";
import Link from "next/link";
import { motion } from "framer-motion";

const framerGrid = {
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.05 },
	},
	hidden: {
		opacity: 0,
	},
};

const framerCards = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

const ProductGrid = () => {
	return (
		<motion.ul
			variants={framerGrid}
			initial="hidden"
			animate="show"
			layout
			className={styles.grid}
		>
			{products.map((product, i) => (
				<motion.li variants={framerCards} key={i}>
					<Link href={`/product/${product.id}`}>
						<a>
							<ProductCard {...product} />
						</a>
					</Link>
				</motion.li>
			))}
		</motion.ul>
	);
};

export default ProductGrid;
