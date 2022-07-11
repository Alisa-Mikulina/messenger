import { field, moreThan, createForm, equals, Form } from '@api/forms';

type RegisterForm = {
	username: string;
	password: string;
	confirmPassword: string;
};

export const registerForm = () => {
	const form = createForm({
		username: field({
			validator: moreThan(4)
		}),
		password: field({
			validator: moreThan(7)
		}),
		confirmPassword: field()
	});

	form.fields.confirmPassword = field({
		validator: equals(form.fields.password, 'Password')
	});

	return form as Form<RegisterForm>;
};
