import { ChangeEvent, useState } from "react";

export const useForm = <T extends object>(initialState: T) => {
	const [formState, setFormState] = useState<T>(initialState);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormState((fs) => ({
			...fs,
			[e.target.name]: e.target.value,
		}));
	};

	const onReset = () => {
		setFormState({ ...initialState });
	};

	const isValidEmail = (email: string) => {
		const regex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(email);
	};

	return {
		...formState,
		formState,

		isValidEmail,

		onChange,
		onReset,
	};
};
