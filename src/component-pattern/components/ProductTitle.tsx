import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import { IProductTitleProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductTitle = ({
	title,
	className,
	style,
}: IProductTitleProps) => {
	const { product } = useContext(ProductContext);

	return (
		<span
			className={`${styles.productDescription} ${className}`}
			style={style}
		>
			{title ? title : product.title}
		</span>
	);
};
