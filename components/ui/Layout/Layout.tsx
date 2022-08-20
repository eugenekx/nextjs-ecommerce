import styles from "./Layout.module.css";

import { Header } from "@components/ui";
import { Cart } from "@components/cart";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.layout}>
			<Header />
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
				<Cart />
			</div>
		</div>
	);
};

export default Layout;
