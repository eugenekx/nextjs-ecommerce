import styles from "./Header.module.css";
import { CartIcon } from "@components/icons";
import { CartContext } from "@components/cart/context";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
	isCartOpened: boolean;
	handleCartToggle: () => void;
};

const Header = ({ isCartOpened, handleCartToggle }: Props) => {
	const cart = useContext(CartContext);
	const cartItemQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<motion.header
			initial={{ y: "-100%", opacity: 0 }}
			animate={{ y: "0%", opacity: 1 }}
			transition={{
				ease: "easeOut",
				duration: 0.5,
				delay: 0.5,
				opacity: { delay: 0.7 },
			}}
			className={styles.header}
		>
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
		</motion.header>
	);
};

export default Header;
