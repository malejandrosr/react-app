import { useEffect, useRef, useState } from "react";
import { IUseProductArgs } from "../interfaces/interfaces";

export const useProduct = ({
	onChange,
	product,
	value = 0,
	initialValues,
}: IUseProductArgs) => {
	const [counter, setCounter] = useState<number>(
		initialValues?.count || value
	);

	const isControlled = useRef(!!onChange);
	const isMounted = useRef(false);

	const increaseBy = (value: number) => {
		if (isControlled.current) {
			return onChange!({ count: value, product });
		}

		let newValue = Math.max(counter + value, 0);

		if (initialValues?.maxCount) {
			newValue = Math.min(newValue, initialValues.maxCount);
		}

		setCounter(newValue);

		onChange && onChange({ count: newValue, product });
	};

	const reset = () => {
		setCounter(initialValues?.count || value);
	};

	useEffect(() => {
		if (!isMounted.current) {
			return;
		}

		setCounter(value);
	}, [value]);

	useEffect(() => {
		isMounted.current = true;
	}, []);

	return {
		counter,
		maxCount: initialValues?.maxCount,
		isMaxCountReached:
			!!initialValues?.count && initialValues.maxCount === counter,
		increaseBy,
		reset,
	};
};
