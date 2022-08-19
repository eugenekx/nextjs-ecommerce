import type { NextPage } from "next";

import { Layout } from "@components/ui";
import { ProductGrid } from "@components/product";

const Home: NextPage = () => {
	return (
		<div>
			<Layout>{<ProductGrid />}</Layout>
		</div>
	);
};

export default Home;
