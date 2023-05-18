import {
	ProductCard,
	ProductButtons,
	ProductImage,
	ProductTitle,
} from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
	const { shoppingCart, onProductCountChange } = useShoppingCart();

	return (
		<div>
			<h1>ShoppingPage</h1>
			<hr />

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
				}}
			>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						className="bg-dark text-white"
						onChange={onProductCountChange}
						value={shoppingCart[product.id]?.count || 0}
					>
						<ProductImage
							className="custom-image"
							style={{
								boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)",
							}}
						/>
						<ProductTitle className="text-bold" />
						<ProductButtons className="custom-buttons" />
					</ProductCard>
				))}

				{/* <ProductCard product={product} className="bg-dark text-white">
					<ProductCard.Image className="custom-image" />
					<ProductCard.Title className="text-bold" />
					<ProductCard.Buttons className="custom-buttons" />
				</ProductCard> 
				
				<ProductCard product={product2} className="bg-dark text-white">
					<ProductImage className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)" }} />
					<ProductTitle className="text-bold" />
					<ProductButtons className="custom-buttons" />
				</ProductCard> 
				
				<ProductCard
					product={product}
					style={{
						backgroundColor: "#70D1F8",
					}}
				>
					<ProductImage style={{ boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)" }} />
					<ProductTitle style={{ fontWeight: "bold" }} />
					<ProductButtons
						style={{ display: "flex", justifyContent: "end" }}
					/>
				</ProductCard> */}
			</div>

			<div className="shopping-cart">
				{Object.entries(shoppingCart).map(([key, product]) => (
					<ProductCard
						key={key}
						product={product}
						className="bg-dark text-white"
						style={{ width: "150px" }}
						onChange={onProductCountChange}
						value={product.count}
					>
						<ProductImage
							className="custom-image"
							style={{
								boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)",
							}}
						/>
						<ProductTitle className="text-bold" />
						<ProductButtons
							className="custom-buttons"
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								alignContent: "center",
							}}
						/>
					</ProductCard>
				))}
			</div>
		</div>
	);
};
