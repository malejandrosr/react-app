import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../lazyload/pages/NoLazy";
import { ShoppingPage } from "../component-pattern/pages/ShoppingPage";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";

type JSXComponent = () => JSX.Element;

interface IRoute {
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
}

const LazyLayout = lazy(
	() =>
		import(
			/* webpackChunkName: "LazyLayout" */ "../lazyload/layout/LazyLayout"
		)
);

export const routes: IRoute[] = [
	{
		to: "/lazy-layout/",
		path: "/lazy-layout/*",
		Component: LazyLayout,
		name: "Lazy-Layout",
	},
	{
		to: "/no-lazy",
		path: "no-lazy",
		Component: NoLazy,
		name: "No-Lazy",
	},
	{
		to: "/shopping",
		path: "shopping",
		Component: ShoppingPage,
		name: "Shopping",
	},
];
