import { useFormik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const FormikYupPage = () => {
	const { errors, getFieldProps, handleSubmit, touched } = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
		},
		onSubmit: async (values) => {
			console.log(values);
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(15, "Debe de tener 15 caracteres o menos")
				.required("Requerido"),
			lastName: Yup.string()
				.max(10, "Debe de tener 10 caracteres o menos")
				.required("Requerido"),
			email: Yup.string()
				.email("Email no tiene un formato valido")
				.required("Requerido"),
		}),
	});

	return (
		<div>
			<h1>FormikYupPage</h1>

			<form noValidate onSubmit={handleSubmit}>
				<label htmlFor="firstName">First Name</label>
				<input
					type="text"
					className={`${errors.email && "has-error"}`}
					{...getFieldProps("firstName")}
				/>
				{touched.firstName && errors.firstName && (
					<span>{errors.firstName}</span>
				)}

				<label htmlFor="lastName">Last Name</label>
				<input
					type="text"
					className={`${errors.email && "has-error"}`}
					{...getFieldProps("lastName")}
				/>
				{touched.firstName && errors.lastName && (
					<span>{errors.lastName}</span>
				)}

				<label htmlFor="email">Email</label>
				<input
					type="email"
					className={`${errors.email && "has-error"}`}
					{...getFieldProps("email")}
				/>
				{touched.firstName && errors.email && (
					<span>{errors.email}</span>
				)}

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
