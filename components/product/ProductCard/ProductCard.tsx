import styles from "./ProductCard.module.css";
import { CartButton } from "@components/ui";
import { formatPrice } from "@lib/utils";
import Image from "next/image";

type ProductProps = {
	id: number;
	title: string;
	price: number;
	imgSrc: string;
};

const ProductCard = ({ id, title, price, imgSrc }: ProductProps) => {
	return (
		<div className={styles.card}>
			<div className={styles.imgWrapper}>
				<Image alt={title} src={imgSrc} width={228} height={130} />
			</div>

			<h3 className={styles.title}>{title}</h3>
			<div className={styles.cardBottom}>
				<CartButton id={id} />
				<span className={styles.price}>{formatPrice(price)}</span>
			</div>
		</div>
	);
};

export default ProductCard;
