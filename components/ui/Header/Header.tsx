import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { CartIcon } from "@components/icons";

const Header = () => {
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

			<CartIcon />
		</header>
	);
};

export default Header;
