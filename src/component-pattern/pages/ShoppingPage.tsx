import {
	ProductCard,
	ProductButtons,
	ProductImage,
	ProductTitle,
} from "../components";
// import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
	// const { shoppingCart, onProductCountChange } = useShoppingCart();

	return (
		<div>
			<h1>ShoppingPage</h1>
			<hr />

			{/* <div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
				}}
			> */}
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

			{/* {products.map((product) => (
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
				))} */}
			{/* </div> */}

			{/* <div className="shopping-cart">
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
			</div> */}

			<ProductCard
				key={product.id}
				product={product}
				className="bg-dark text-white"
				initialValues={{
					count: 2,
					maxCount: 10
				}}
			>
				{({ count, maxCount, reset, increaseBy, isMaxCountReached }) => (
					<>
						<ProductImage
							className="custom-image"
							style={{
								boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)",
							}}
						/>
						<ProductTitle className="text-bold" />
						<ProductButtons className="custom-buttons" />

						<button onClick={() => reset()}>Reset</button>
						<button onClick={() => increaseBy(-2)}>-2</button>
						{!isMaxCountReached && (
							<button onClick={() => increaseBy(+2)}>+2</button>
						)}
						<span>{`${count} - ${maxCount ?? ""}`}</span>
					</>
				)}
			</ProductCard>
		</div>
	);
};
