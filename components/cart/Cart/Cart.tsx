import styles from "./Cart.module.css";
import { CartItem } from "@components/cart";
import { CloseIcon } from "@components/icons";
import { type CartEntry, formatPrice, findProduct } from "@lib/utils";
import { tax, shipping } from "@lib/data";

type Props = {
	cart: CartEntry[];
	isCartOpened: boolean;
	handleCartToggle: () => void;
};

const Cart = ({ cart, isCartOpened, handleCartToggle }: Props) => {
	const subtotal = getCartSubtotal(cart);
	const total = subtotal + tax + shipping;

	function getCartSubtotal(cart: CartEntry[]): number {
		let sum = cart.reduce((sum, item) => {
			let product = findProduct(item.id);
			let price = product ? product.price : 0;

			return sum + price * item.quantity;
		}, 0);

		return sum;
	}

	if (cart.length) {
		return (
			<div
				className={`${styles.cart} ${
					isCartOpened ? styles.opened : ""
				}`}
			>
				<div className={styles.closeButtonWrapper}>
					<button
						className={styles.closeButton}
						onClick={handleCartToggle}
					>
						<CloseIcon fill="black" width={22} height={22} />
					</button>
				</div>
				<div className={styles.itemsContainer}>
					<div className={styles.title}>My Basket</div>
					<ul className={styles.cartItems}>
						{cart.map((item, i) => (
							<li key={i}>
								<CartItem
									cartItem={item}
									handleCartToggle={handleCartToggle}
								/>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.totalContainer}>
					<p className={styles.costRow}>
						Subtotal{" "}
						<span className={styles.cost}>
							{formatPrice(subtotal)}
						</span>
					</p>
					<p className={styles.costRow}>
						Tax{" "}
						<span className={styles.cost}>{formatPrice(tax)}</span>
					</p>
					<p className={styles.costRow}>
						Shipping{" "}
						<span className={styles.cost}>
							{formatPrice(shipping)}
						</span>
					</p>
					<p className={`${styles.costRow} ${styles.totalRow}`}>
						Total{" "}
						<span className={styles.cost}>
							{formatPrice(total)}
						</span>
					</p>
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default Cart;
