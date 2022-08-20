import styles from "./ProductCard.module.css";

import Image from "next/image";
import { CartIcon } from "@components/icons";

type ProductProps = {
	title: string;
	price: number;
	imgSrc: string;
};

const ProductCard = ({ title, price, imgSrc }: ProductProps) => {
	return (
		<div className={styles.card}>
			<div className={styles.imgWrapper}>
				<Image alt={title} src={imgSrc} width={228} height={130} />
			</div>

			<h3 className={styles.title}>{title}</h3>
			<div className={styles.cardBottom}>
				<button className={styles.addToCart}>
					<CartIcon fill="white" />
				</button>
				<span className={styles.price}>$ {price}</span>
			</div>
		</div>
	);
};

export default ProductCard;
