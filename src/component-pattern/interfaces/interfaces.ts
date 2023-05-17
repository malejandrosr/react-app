import { CSSProperties, ReactElement } from "react";

export interface IProduct {
	id: string;
	title: string;
	img?: string;
}

export interface IProductContextProps {
	counter: number;
	increaseBy: (value: number) => void;
	product: IProduct;
}

export interface IProductCardProps {
	product: IProduct;
	children?: ReactElement | ReactElement[];
	className?: string;
	style?: CSSProperties;
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
