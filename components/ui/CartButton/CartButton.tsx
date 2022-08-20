import styles from "./CartButton.module.css";
import { CartIcon } from "@components/icons";

const CartButton = () => {
	return (
		<button className={styles.addToCart}>
			<CartIcon fill="white" />
		</button>
	);
};

export default CartButton;
