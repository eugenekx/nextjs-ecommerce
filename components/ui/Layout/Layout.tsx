import styles from "./Layout.module.css";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "@components/cart/context";
import { Header } from "@components/ui";
import { Cart } from "@components/cart";
import { motion, LayoutGroup } from "framer-motion";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	const [isCartOpened, setIsCartOpened] = useState(false); // for mobile devices
	const cart = useContext(CartContext);

	function handleCartToggle() {
		// prevent body scroll if cart is going to be opened
		if (cart.length) {
			if (isCartOpened) {
				document.body.classList.remove("body-noscroll-mobile");
			} else {
				document.body.classList.add("body-noscroll-mobile");
			}

			setIsCartOpened(!isCartOpened);
		}
	}

	useEffect(() => {
		if (!cart.length) {
			document.body.classList.remove("body-noscroll-mobile");
			setIsCartOpened(false);
		}

		if (cart.length === 1 && window.innerWidth >= 1000) {
			setIsCartOpened(true);
		}
	}, [cart.length]);

	return (
		<div className={styles.layout}>
			<Header
				isCartOpened={isCartOpened}
				handleCartToggle={handleCartToggle}
			/>
			<div className={styles.headerSpacer}></div>
			<div className={styles.container}>
				<LayoutGroup>
					<motion.main layout="position" className={styles.main}>
						{children}
					</motion.main>
					<Cart
						cart={cart}
						isCartOpened={isCartOpened}
						handleCartToggle={handleCartToggle}
					/>
				</LayoutGroup>
			</div>
		</div>
	);
};

export default Layout;
