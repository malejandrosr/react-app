import { createContext } from "react";

import { useProduct } from "../hooks/useProduct";
import {
	IProductCardProps,
	IProductContextProps,
} from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
	product,
	children,
	className,
	style,
	onChange,
	value,
}: IProductCardProps) => {
	const { counter, increaseBy } = useProduct({ onChange, product, value });

	return (
		<Provider value={{ counter, increaseBy, product }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
			</div>
		</Provider>
	);
};
