import styles from "./ProductInfo.module.css";

import Image from "next/image";
import Link from "next/link";

import { CartButton } from "@components/ui";

const ProductInfo = () => {
	const product = {
		id: 0,
		title: "New Balance 574 Vintage Brights",
		imgSrc: "/product1.png",
		number: "MT91547",
		price: 650,
	};

	return (
		<div className={styles.container}>
			<Link href="/">
				<a>
					<button className={styles.backButton}>
						Back in catalog
					</button>
				</a>
			</Link>

			<div className={styles.imgWrapper}>
				<Image
					src={product.imgSrc}
					alt={product.title}
					width={890}
					height={500}
				/>
			</div>

			<h1 className={styles.title}>{product.title}</h1>
			<p className={styles.number}>Item model number: {product.number}</p>

			<div className={styles.cartAndPrice}>
				<CartButton />
				<span className={styles.price}>$ {product.price}</span>
			</div>
		</div>
	);
};

export default ProductInfo;
