import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Select, TextInput } from "../components";

import formJson from "../data/form.json";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const field of formJson) {
	initialValues[field.name] = field.value;

	if (!field.validations) {
		continue;
	}

	let schema = Yup.string();

	for (const validation of field.validations) {
		if (validation.type === "required") {
			schema = schema.required("Requerido");
		}

		if (validation.type === "minLength") {
			schema = schema.min((validation as any).value || 1, `El campo debe tener al menos ${(validation as any).value} caracteres`);
		}

		if (validation.type === "email") {
			schema = schema.email("El email no cumple un formato válido");
		}
	}

	requiredFields[field.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const FormikDynamicPage = () => {
	return (
		<div>
			<h1>FormikDynamicPage</h1>

			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={validationSchema}
			>
				{(formik) => (
					<Form>
						{formJson.map(
							({
								type,
								name,
								placeholder,
								label,
								value,
								options,
							}) => {
								if (
									type === "input" ||
									type === "password" ||
									type === "email"
								) {
									return (
										<TextInput
											key={name}
											type={type as any}
											name={name}
											label={label}
											placeholder={placeholder}
										/>
									);
								} else if (type === "select") {
									return (
										<Select
											key={name}
											label={label}
											name={name}
										>
											<option value="">
												Select an option
											</option>
											{options?.map(({ id, label }) => (
												<option key={id} value={id}>
													{label}
												</option>
											))}
										</Select>
									);
								}

								throw new Error(
									`El tipo ${type} no es soportado`
								);
							}
						)}

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
