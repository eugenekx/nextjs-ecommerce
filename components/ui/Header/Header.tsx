import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { CartIcon } from "@components/icons";
import { CartContext } from "@components/cart/context";
import { useContext } from "react";

const Header = () => {
	const cart = useContext(CartContext);
	const cartItemQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<header className={styles.header}>
			<Link href="/">
				<a>
					<Image
						src="/logo.svg"
						height={32}
						width={90}
						alt="SP.Shop"
					/>
				</a>
			</Link>

			<div className={styles.cartIcon}>
				<CartIcon />
				{cartItemQuantity > 0 && (
					<span className={styles.cartQuantity}>
						{cartItemQuantity}
					</span>
				)}
			</div>
		</header>
	);
};

export default Header;
