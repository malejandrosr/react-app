import { useState } from 'react';
import { IProduct, IProductCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{
		[key: string]: IProductCart;
	}>({});

	const onProductCountChange = ({
		count,
		product,
	}: {
		count: number;
		product: IProduct;
	}) => {
		setShoppingCart((sc) => {
			const productCart: IProductCart = sc[product.id] || {
				...product,
				count: 0,
			};

			if (Math.max(productCart.count + count, 0) > 0) {
				productCart.count += count;

				return { ...sc, [product.id]: productCart };
			}

			const { [product.id]: toDelete, ...rest } = sc;

			return { ...rest };

			/* if (count === 0) {
				const { [product.id]: toDelete, ...rest } = sc;

				return { ...rest };
			}

			return {
				...sc,
				[product.id]: { ...product, count },
			}; */
		});
	};

	return { shoppingCart, onProductCountChange };
};
