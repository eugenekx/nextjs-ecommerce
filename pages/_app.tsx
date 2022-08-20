import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@components/ui";
import {
	CartContext,
	CartDispatchContext,
	cartReducer,
	defaultCart,
} from "@components/cart/context";
import { useReducer } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const [cart, dispatch] = useReducer(cartReducer, defaultCart);

	return (
		<CartContext.Provider value={cart}>
			<CartDispatchContext.Provider value={dispatch}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</CartDispatchContext.Provider>
		</CartContext.Provider>
	);
}

export default MyApp;
