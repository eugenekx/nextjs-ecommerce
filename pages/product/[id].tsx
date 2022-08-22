import { useRouter } from "next/router";
import { ProductInfo } from "@components/product";

const ProductPage = () => {
	const router = useRouter();

	function parseProductID(query: string | string[] | undefined): number {
		if (typeof query === "undefined") {
			// TODO: check router, add spinner
			return 0; // client router isn't ready on first render.
		}
		if (Array.isArray(query)) {
			return parseInt(query[0], 10);
		}
		return parseInt(query, 10);
	}

	return <ProductInfo id={parseProductID(router.query.id)} />;
};

export default ProductPage;
