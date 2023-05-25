import { Form, Formik } from "formik";
import * as Yup from "yup";

import { Checkbox, Select, TextInput } from "../components";

import "../styles/styles.css";

export const FormikAbstractPage = () => {
	return (
		<div>
			<h1>FormikAbstractPage</h1>

			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					jobType: "",
					terms: false,
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, "Debe de tener 15 caracteres o menos")
						.required("Requerido"),
					lastName: Yup.string()
						.max(10, "Debe de tener 10 caracteres o menos")
						.required("Requerido"),
					email: Yup.string()
						.email("Email no tiene un formato valido")
						.required("Requerido"),
					jobType: Yup.string().notOneOf(["it-junior"], "Esta opción no es permitida").required("Requerido"),
					terms: Yup.boolean().oneOf([true], "Debe de aceptar los terminos y condiciones")
				})}
			>
				{(formik) => (
					<Form>
						<TextInput label="First Name" name="firstName" placeholder="My First Name" />

						<TextInput label="Last Name" name="lastName" placeholder="My Last Name" />

						<TextInput label="Email" name="email" placeholder="My Email" type="email" />
						
						<Select label="Job Type" name="jobType">
							<option value="">Select a value</option>
							<option value="developer">Developer</option>
							<option value="designer">Designer</option>
							<option value="it-senior">IT Senior</option>
							<option value="it-junior">IT Junior</option>
						</Select>

						<Checkbox label="Terms & Conditions" name="terms" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
