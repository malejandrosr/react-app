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
	initialValues,
}: IProductCardProps) => {
	const { counter, increaseBy, reset, maxCount, isMaxCountReached } =
		useProduct({ onChange, product, value, initialValues });

	return (
		<Provider value={{ counter, increaseBy, product, maxCount }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children({
					count: counter,
					isMaxCountReached,
					increaseBy,
					reset,
					maxCount,
					product,
				})}
			</div>
		</Provider>
	);
};
