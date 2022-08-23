import { useRouter } from "next/router";
import { ProductInfo } from "@components/product";
import { findProduct } from "@lib/utils";
import { seoDescription } from "@lib/data";
import Head from "next/head";
import { motion } from "framer-motion";

const ProductPage = () => {
	const router = useRouter();

	function parseProductID(query: string | string[]): number {
		if (Array.isArray(query)) {
			return parseInt(query[0], 10);
		} else {
			return parseInt(query, 10);
		}
	}

	const id = router.query.id;
	const product = id ? findProduct(parseProductID(id)) : null;
	return (
		<>
			{product && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					layout
				>
					<Head>
						<title>{product.title} — SP.Shop</title>
						<meta name="description" content={seoDescription} />
						<meta itemProp="name" content={product.title} />
						<meta itemProp="description" content={seoDescription} />
						<meta itemProp="image" content={product.imgSrc} />
					</Head>
					<ProductInfo product={product} />
				</motion.div>
			)}
		</>
	);
};

export default ProductPage;
