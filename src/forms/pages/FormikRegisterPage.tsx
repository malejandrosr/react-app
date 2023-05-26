import { Form, Formik } from "formik";
import * as Yup from "yup";

import { TextInput } from "../components";

import "../styles/styles.css";

const formikRegisterValidationSchema = Yup.object({
	name: Yup.string()
		.min(2, "El nombre debe tener al menos 2 caracteres")
		.max(15, "El nombre debe de tener menos de 15 caracteres")
		.required("Requerido"),
	email: Yup.string()
		.email("El email no cumple con el formato valido")
		.required("Requerido"),
	password: Yup.string()
		.min(6, "La contraseña debe tener al menos 6 caracteres")
		.required("Requerido"),
	passwordRepeated: Yup.string()
		.oneOf([Yup.ref("password")], "Las contraseñas deben coincidir")
		.required("Requerido"),
});

export const FormikRegisterPage = () => {
	return (
		<div>
			<h1>FormikRegisterPage</h1>

			<Formik
				initialValues={{
					name: "",
					email: "",
					password: "",
					passwordRepeated: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={formikRegisterValidationSchema}
			>
				{({ handleReset }) => (
					<Form>
						<TextInput
							label="Name"
							name="name"
							placeholder="My Name"
						/>

						<TextInput
							label="Email"
							name="email"
							placeholder="My Email"
							type="email"
						/>

						<TextInput
							label="Password"
							name="password"
							placeholder="My Password"
							type="password"
						/>

						<TextInput
							label="Repeat Password"
							name="passwordRepeated"
							placeholder="Repeat 'My Password'"
							type="password"
						/>

						<button type="submit">Submit</button>

						<button type="button" onClick={handleReset}>
							Reset
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
