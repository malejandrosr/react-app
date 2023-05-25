import { useField, ErrorMessage } from 'formik';

interface ISelectProps {
	label: string;
	name: string;
	placeholder?: string;
	[key: string]: any;
}

export const Select = ({ label, ...props }: ISelectProps) => {
	const [field] = useField(props);

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<select {...field} {...props} />
			<ErrorMessage name={props.name} component="span" />
		</>
	);
};
