import { createContext, type Dispatch } from "react";

type Cart = [
	{
		id: number;
		quantity: number;
	}
];

type Action = {
	type: string;
	id?: number;
};

export function cartReducer(cart: Cart, action: Action): any {
	switch (action.type) {
		case "deleted": {
			return cart.filter((t) => t.id !== action.id);
		}
		default: {
			throw Error("Unknown action: " + action.type);
		}
	}
}

export const defaultCart = [
	{ id: 0, quantity: 1 },
	{ id: 2, quantity: 1 },
];

export const CartContext = createContext(defaultCart);
export const CartDispatchContext = createContext(
	(() => undefined) as Dispatch<any>
);
