import styles from "./CartButton.module.css";
import { CartIcon } from "@components/icons";
import { CartDispatchContext } from "@components/cart/context";
import { useContext } from "react";

type Props = {
	id: number;
};

const CartButton = ({ id }: Props) => {
	const dispatch = useContext(CartDispatchContext);

	return (
		<button
			className={styles.addToCart}
			onClick={(e) => {
				e.preventDefault();
				dispatch({
					type: "CART_ADD",
					id: id,
				});
			}}
		>
			<CartIcon fill="white" />
		</button>
	);
};

export default CartButton;
