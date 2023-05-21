import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import { IProductButtonsProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductButtons = ({ className }: IProductButtonsProps) => {
	const { counter, increaseBy, maxCount } = useContext(ProductContext);

	const isMaxReached = useCallback(
		() => !!maxCount && counter === maxCount,
		[counter, maxCount]
	);

	return (
		<div className={`${styles.buttonsContainer} ${className}`}>
			<button
				className={styles.buttonMinus}
				onClick={() => increaseBy(-1)}
			>
				-
			</button>
			<div className={styles.countLabel}>{counter}</div>
			<button
				className={`${styles.buttonAdd} ${
					isMaxReached() && styles.disabled
				}`}
				onClick={() => increaseBy(+1)}
			>
				+
			</button>
		</div>
	);
};
