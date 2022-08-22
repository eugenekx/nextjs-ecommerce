import { createContext, type Dispatch } from "react";
import { defaultCart } from "@lib/data";
import { type CartItems } from "@lib/utils";

export type Action = {
	type: "CART_ADD" | "CART_DELETE" | "CART_DEC";
	id: number;
};

function handleAddItem(cart: CartItems, id: number): CartItems {
	let indexInCart = cart.findIndex((i) => i.id === id);

	if (indexInCart === -1) {
		return [...cart, { id: id, quantity: 1 }];
	} else {
		let quantity = cart[indexInCart].quantity++;
		let newItem = {
			id,
			quantity,
		};

		return cart.map((item, i) => (indexInCart === i ? newItem : item));
	}
}

function handleDeleteItem(cart: CartItems, id: number): CartItems {
	return cart.filter((i) => i.id !== id);
}

function handleDecItemQuantity(cart: CartItems, id: number): CartItems {
	let indexInCart = cart.findIndex((i) => i.id === id);

	let quantity = cart[indexInCart].quantity--;

	if (quantity <= 0) {
		return handleDeleteItem(cart, id);
	} else {
		let newItem = {
			id,
			quantity,
		};

		return cart.map((item, i) => (indexInCart === i ? newItem : item));
	}
}

export function cartReducer(cart: CartItems, action: Action): CartItems {
	switch (action.type) {
		case "CART_ADD": {
			return handleAddItem(cart, action.id);
		}
		case "CART_DELETE": {
			return handleDeleteItem(cart, action.id);
		}
		case "CART_DEC": {
			return handleDecItemQuantity(cart, action.id);
		}
		default: {
			throw Error("Unknown action: " + action.type);
		}
	}
}

export const CartContext = createContext(defaultCart);
export const CartDispatchContext = createContext(
	(() => undefined) as Dispatch<Action>
);
