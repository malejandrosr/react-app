import { LazyExoticComponent, lazy } from "react";

import { NoLazy } from "../lazyload/pages";
import { ShoppingPage } from "../component-pattern/pages";
import {
	RegisterPage,
	FormikBasicPage,
	FormikYupPage,
	FormikComponentsPage,
	FormikAbstractPage,
	FormikRegisterPage,
	FormikDynamicPage,
} from "../forms/pages";

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
	{
		to: "/register",
		path: "register",
		Component: RegisterPage,
		name: "Register Page",
	},
	{
		to: "/formik-basic",
		path: "formik-basic",
		Component: FormikBasicPage,
		name: "Formik Basic Page",
	},
	{
		to: "/formik-yup",
		path: "formik-yup",
		Component: FormikYupPage,
		name: "Formik Yup Page",
	},
	{
		to: "/formik-components",
		path: "formik-components",
		Component: FormikComponentsPage,
		name: "Formik Components Page",
	},
	{
		to: "/formik-abstract",
		path: "formik-abstract",
		Component: FormikAbstractPage,
		name: "Formik Abstract Page",
	},
	{
		to: "/formik-register",
		path: "formik-register",
		Component: FormikRegisterPage,
		name: "Formik Register Page",
	},
	{
		to: "/formik-dynamic",
		path: "formik-dynamic",
		Component: FormikDynamicPage,
		name: "Formik Dynamic Page",
	},
];
