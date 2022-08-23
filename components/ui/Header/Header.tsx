import styles from "./Header.module.css";
import { CartIcon } from "@components/icons";
import { CartContext } from "@components/cart/context";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
	isCartOpened: boolean;
	handleCartToggle: () => void;
};

const Header = ({ isCartOpened, handleCartToggle }: Props) => {
	const cart = useContext(CartContext);
	const cartItemQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<header className={styles.header}>
			<Link href="/">
				<a
					onClick={() => {
						if (window.innerWidth <= 1000 && isCartOpened) {
							handleCartToggle();
						}
					}}
				>
					<Image
						src="/logo.svg"
						height={32}
						width={90}
						alt="SP.Shop"
					/>
				</a>
			</Link>

			<button className={styles.cartIcon} onClick={handleCartToggle}>
				<CartIcon />
				{cartItemQuantity > 0 && (
					<span className={styles.cartQuantity}>
						{cartItemQuantity}
					</span>
				)}
			</button>
		</header>
	);
};

export default Header;
