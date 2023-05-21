import { CSSProperties, ReactElement } from "react";

export interface IProduct {
	id: string;
	title: string;
	img?: string;
}

export interface IProductCart extends IProduct {
	count: number;
}

export interface IProductContextProps {
	counter: number;
	increaseBy: (value: number) => void;
	maxCount?: number;
	product: IProduct;
}

export interface IInitialValues {
	count?: number;
	maxCount?: number;
}

export interface IProductCardProps {
	product: IProduct;
	// children?: ReactElement | ReactElement[];
	children: (args: IProductCardHandler) => JSX.Element;
	className?: string;
	style?: CSSProperties;
	onChange?: (args: IOnChangeArgs) => void;
	value?: number;
	initialValues?: IInitialValues;
}

export interface IProductImageProps {
	img?: string;
	className?: string;
	style?: CSSProperties;
}

export interface IProductTitleProps {
	title?: string;
	className?: string;
	style?: CSSProperties;
}

export interface IProductButtonsProps {
	className?: string;
	style?: CSSProperties;
}

export interface IProductCardHOCProps {
	(props: IProductCardProps): JSX.Element;
	Image: (props: IProductImageProps) => JSX.Element;
	Title: (props: IProductTitleProps) => JSX.Element;
	Buttons: (props: IProductButtonsProps) => JSX.Element;
}

export interface IOnChangeArgs {
	product: IProduct;
	count: number;
}

export interface IUseProductArgs {
	product: IProduct;
	onChange?: (args: IOnChangeArgs) => void;
	value?: number;
	initialValues?: IInitialValues;
}

export interface IProductCardHandler {
	count: number;
	isMaxCountReached: boolean;
	maxCount?: number;
	product: IProduct;
	increaseBy: (value: number) => void;
	reset: () => void;
}
