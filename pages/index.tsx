import type { NextPage } from "next";
import { ProductGrid } from "@components/product";
import { seoDescription } from "@lib/data";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>SP.Shop</title>
				<meta name="description" content={seoDescription} />
				<meta itemProp="name" content={"SP.Shop"} />
				<meta itemProp="description" content={seoDescription} />
			</Head>
			<ProductGrid />
		</>
	);
};

export default Home;
