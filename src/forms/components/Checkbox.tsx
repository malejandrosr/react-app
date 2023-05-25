import { useField, ErrorMessage } from 'formik';

interface ICheckboxProps {
	label: string;
	name: string;
	[key: string]: any;
}

export const Checkbox = ({ label, ...props }: ICheckboxProps) => {
	const [field] = useField({ ...props, type: "checkbox" });

	return (
		<>
			<label>
				<input type="checkbox" {...field} {...props} />
				{label}
			</label>
			<ErrorMessage name={props.name} component="span" />
		</>
	);
};
