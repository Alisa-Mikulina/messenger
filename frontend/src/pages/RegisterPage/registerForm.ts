import { field, moreThan, createForm, equals, Form } from '@api/forms';

type RegisterForm = {
	username: string;
	password: string;
	confirmPassword: string;
};

export const registerForm = () => {
	const password = field({
		validator: moreThan(7)
	});

	const confirmPassword = field({
		validator: equals(password, 'Password')
	});

	const form = createForm({
		username: field({
			validator: moreThan(4)
		}),
		password,
		confirmPassword
	});

	return form as Form<RegisterForm>;
};
