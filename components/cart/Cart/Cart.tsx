import styles from "./Cart.module.css";
import { CartItem } from "@components/cart";
import { useContext } from "react";
import { CartContext } from "@components/cart/context";

const Cart = () => {
	const cart = useContext(CartContext);

	return (
		<div className={styles.cart}>
			<div className={styles.itemsContainer}>
				<div className={styles.title}>My Basket</div>
				<ul>
					{cart.map((item, i) => (
						<li key={i}>
							<CartItem {...item} />
						</li>
					))}
				</ul>
			</div>
			<div className={styles.totalContainer}>
				<p className={styles.costRow}>
					Subtotal <span className={styles.cost}>$ 1850</span>
				</p>
				<p className={styles.costRow}>
					Tax <span className={styles.cost}>$ 100</span>
				</p>
				<p className={styles.costRow}>
					Shipping <span className={styles.cost}>$ 150</span>
				</p>
				<p className={`${styles.costRow} ${styles.totalRow}`}>
					Total <span className={styles.cost}>$ 2 100</span>
				</p>
			</div>
		</div>
	);
};

export default Cart;
