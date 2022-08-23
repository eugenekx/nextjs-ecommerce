import styles from "./ProductInfo.module.css";
import { CartButton } from "@components/ui";
import { formatPrice, Product } from "@lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
	product: Product;
};

const ProductInfo = ({ product }: Props) => {
	return (
		<>
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
				<p className={styles.number}>
					Item model number: {product.number}
				</p>

				<div className={styles.cartAndPrice}>
					<CartButton id={product.id} />
					<span className={styles.price}>
						{formatPrice(product.price)}
					</span>
				</div>
			</div>
		</>
	);
};

export default ProductInfo;
