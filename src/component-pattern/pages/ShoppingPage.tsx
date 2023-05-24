import {
	ProductCard,
	ProductButtons,
	ProductImage,
	ProductTitle,
} from "../components";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
	return (
		<div>
			<h1>ShoppingPage</h1>
			<hr />

			<ProductCard
				key={product.id}
				product={product}
				initialValues={{
					count: 2,
					maxCount: 10,
				}}
			>
				{({ count, maxCount, reset, increaseBy, isMaxCountReached }) => (
					<>
						<ProductImage />
						<ProductTitle />
						<ProductButtons />
					</>
				)}
			</ProductCard>
		</div>
	);
};
