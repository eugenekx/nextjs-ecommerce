import { useRouter } from "next/router";
import { ProductInfo } from "@components/product";
import { findProduct } from "@lib/utils";
import { seoDescription } from "@lib/data";
import Head from "next/head";

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

	const product = findProduct(parseProductID(router.query.id));
	return (
		<>
			<Head>
				<title>{product.title} — SP.Shop</title>
				<meta name="description" content={seoDescription} />
				<meta itemProp="name" content={product.title} />
				<meta itemProp="description" content={seoDescription} />
				<meta itemProp="image" content={product.imgSrc} />
			</Head>
			<ProductInfo product={product} />
		</>
	);
};

export default ProductPage;
