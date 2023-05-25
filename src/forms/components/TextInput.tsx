import { useField, ErrorMessage } from 'formik';

interface ITextInputProps {
	label: string;
	name: string;
	placeholder?: string;
	type?: "text" | "email" | "password";
	[key: string]: any;
}

export const TextInput = ({ label, ...props }: ITextInputProps) => {
	const [field] = useField(props);

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className="text-input" {...field} {...props} />
			<ErrorMessage name={props.name} component="span" />
		</>
	);
};
