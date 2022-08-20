import { useRouter } from "next/router";
import { ProductInfo } from "@components/product";

const ProductPage = () => {
	const router = useRouter();
	const { id } = router.query;

	return <ProductInfo />;
};

export default ProductPage;
