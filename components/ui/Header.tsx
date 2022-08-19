import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

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

			<Image src="/cart.svg" height={27} width={30} alt="Cart" />
		</header>
	);
};

export default Header;
