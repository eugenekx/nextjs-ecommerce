import styles from "./Cart.module.css";
import { CartItem } from "@components/cart";
import { CloseIcon } from "@components/icons";
import { type CartEntry, formatPrice, findProduct } from "@lib/utils";
import { tax, shipping } from "@lib/data";
import { motion, AnimatePresence } from "framer-motion";

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

	return (
		<AnimatePresence mode="popLayout">
			{cart.length && isCartOpened && (
				<motion.div
					initial={{ x: "100%" }}
					animate={{ x: "0" }}
					exit={{ x: "100%" }}
					transition={{ ease: "easeOut", duration: 0.3 }}
					className={styles.cart}
				>
					<div className={styles.closeButtonWrapper}>
						<button
							className={styles.closeButton}
							onClick={handleCartToggle}
						>
							<CloseIcon fill="black" width={22} height={22} />
						</button>
					</div>

					<motion.div
						layout
						transition={{ delay: 0.1 }}
						className={styles.itemsContainer}
					>
						<motion.div layout className={styles.title}>
							My Basket
						</motion.div>
						<motion.ul layout className={styles.cartItems}>
							<AnimatePresence initial={false} mode="popLayout">
								{cart.map((item, i) => (
									<motion.li
										layout="position"
										key={item.id}
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.8 }}
										transition={{
											opacity: {
												delay: 0.2,
												duration: 0.1,
											},
											delay: 0.1,
										}}
									>
										<CartItem
											cartItem={item}
											handleCartToggle={handleCartToggle}
										/>
									</motion.li>
								))}
							</AnimatePresence>
						</motion.ul>
					</motion.div>

					<motion.div
						layout
						transition={{ delay: 0.1 }}
						className={styles.totalContainer}
					>
						<p className={styles.costRow}>
							Subtotal{" "}
							<span className={styles.cost}>
								{formatPrice(subtotal)}
							</span>
						</p>
						<p className={styles.costRow}>
							Tax{" "}
							<span className={styles.cost}>
								{formatPrice(tax)}
							</span>
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
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Cart;
