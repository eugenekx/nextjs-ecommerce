import styles from "./CartItem.module.css";
import Image from "next/image";
import { PlusIcon, MinusIcon, CloseIcon } from "@components/icons";
import products from "@components/data";
import { CartDispatchContext } from "@components/cart/context";
import { useContext } from "react";

type Props = {
	id: number;
	quantity: number;
};

function findProduct(id: number) {
	let product = products.find((p) => p.id === id);
	if (product) {
		return product;
	} else {
		return {
			title: "",
			imgSrc: "",
			price: 0,
		};
	}
}

const CartItem = ({ id, quantity }: Props) => {
	const dispatch = useContext(CartDispatchContext);
	const { title, imgSrc, price } = findProduct(id);

	return (
		<div className={styles.cartItem}>
			<div className={styles.imgWrapper}>
				<Image alt={title} src={imgSrc} width={90} height={50} />
			</div>
			<div className={styles.infoWrapper}>
				<div>{title}</div>
				<div className={styles.quantityContainer}>
					<button className={styles.minus}>
						<MinusIcon />
					</button>
					<span className={styles.quantity}>{quantity}</span>
					<button className={styles.plus}>
						<PlusIcon />
					</button>
					<span className={styles.price}>$ {price}</span>
				</div>
			</div>
			<button
				className={styles.close}
				onClick={() => {
					dispatch({
						type: "deleted",
						id: id,
					});
				}}
			>
				<CloseIcon />
			</button>
		</div>
	);
};

export default CartItem;
