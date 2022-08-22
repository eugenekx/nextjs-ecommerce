import styles from "./Layout.module.css";
import { useState } from "react";
import { Header } from "@components/ui";
import { Cart } from "@components/cart";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	const [isCartOpened, setIsCartOpened] = useState(false); // for mobile devices

	function handleCartToggle() {
		// prevent body scroll if cart is going to be opened
		if (isCartOpened) {
			document.body.classList.remove("body-noscroll-mobile");
		} else {
			document.body.classList.add("body-noscroll-mobile");
		}

		setIsCartOpened(!isCartOpened);
	}

	return (
		<div className={styles.layout}>
			<Header handleCartToggle={handleCartToggle} />
			<div className={styles.headerSpacer}></div>
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
				<Cart
					isCartOpened={isCartOpened}
					handleCartToggle={handleCartToggle}
				/>
			</div>
		</div>
	);
};

export default Layout;
