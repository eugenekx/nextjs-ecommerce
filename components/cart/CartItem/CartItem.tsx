import styles from "./CartItem.module.css";
import { PlusIcon, MinusIcon, CloseIcon } from "@components/icons";
import { CartDispatchContext } from "@components/cart/context";
import { formatPrice, findProduct } from "@lib/utils";
import { useContext } from "react";
import Image from "next/image";

type Props = {
	id: number;
	quantity: number;
};

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
					<button
						className={styles.minus}
						onClick={() => {
							dispatch({
								type: "CART_DEC",
								id: id,
							});
						}}
					>
						<MinusIcon />
					</button>
					<span className={styles.quantity}>{quantity}</span>
					<button
						className={styles.plus}
						onClick={() => {
							dispatch({
								type: "CART_ADD",
								id: id,
							});
						}}
					>
						<PlusIcon />
					</button>
					<span className={styles.price}>{formatPrice(price)}</span>
				</div>
			</div>
			<button
				className={styles.close}
				onClick={() => {
					dispatch({
						type: "CART_DELETE",
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