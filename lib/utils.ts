import { products } from "@lib/data";

export type CartEntry = {
	id: number;
	quantity: number;
};

export type Product = {
	id: number;
	title: string;
	imgSrc: string;
	number: string;
	price: number;
};

export function findProduct(id: number): Product {
	let product = products.find((p) => p.id === id);

	if (product) {
		return product;
	} else {
		let dummyProduct = {
			id: 0,
			title: "",
			imgSrc: "",
			number: "",
			price: 0,
		};

		return dummyProduct;
	}
}

// e.g., 1250 => "$ 1 250"
export function formatPrice(price: number): string {
	return "$ " + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
