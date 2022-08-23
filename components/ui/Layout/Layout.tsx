import styles from "./Layout.module.css";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "@components/cart/context";
import { Header } from "@components/ui";
import { Cart } from "@components/cart";

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
	}, [cart.length]);

	return (
		<div className={styles.layout}>
			<Header
				isCartOpened={isCartOpened}
				handleCartToggle={handleCartToggle}
			/>
			<div className={styles.headerSpacer}></div>
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
				<Cart
					cart={cart}
					isCartOpened={isCartOpened}
					handleCartToggle={handleCartToggle}
				/>
			</div>
		</div>
	);
};

export default Layout;
