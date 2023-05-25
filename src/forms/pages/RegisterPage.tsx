import { FormEvent } from "react";

import { useForm } from "../hooks";

import "../styles/styles.css";

export const RegisterPage = () => {
	const {
		formState,
		name,
		email,
		password,
		passwordRepeated,

		isValidEmail,

		onChange,
		onReset,
	} = useForm({
		name: "",
		email: "",
		password: "",
		passwordRepeated: "",
	});

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log("jaja", formState);
	};

	return (
		<div>
			<h1>RegisterPage</h1>

			<form noValidate onSubmit={onSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Name"
					value={name}
					onChange={onChange}
					className={`${name.trim().length <= 0 && "has-error"}`}
				/>
				{name.trim().length <= 0 && (
					<span>Este campo es obligatorio</span>
				)}

				<input
					type="email"
					name="email"
					placeholder="Email"
					value={email}
					onChange={onChange}
					className={`${isValidEmail(email) && "has-error"}`}
				/>
				{!isValidEmail(email) && <span>El correo no es valido</span>}

				<input
					type="password"
					name="password"
					placeholder="Password"
					value={password}
					onChange={onChange}
				/>
				{password.trim().length <= 0 && (
					<span>Este campo es obligatorio</span>
				)}
				{password.trim().length < 6 && password.trim().length > 0 && (
					<span>La contraseña debe tener 6 caracteres</span>
				)}

				<input
					type="password"
					name="passwordRepeat"
					placeholder="Repeat password"
					value={passwordRepeated}
					onChange={onChange}
				/>
				{passwordRepeated.trim().length <= 0 && (
					<span>Este campo es obligatorio</span>
				)}
				{passwordRepeated.trim().length > 0 &&
					password !== passwordRepeated && (
						<span>Las contraseñas no coinciden</span>
					)}

				<button type="submit">Create</button>
				<button type="button" onClick={() => onReset()}>
					Reset
				</button>
			</form>
		</div>
	);
};
