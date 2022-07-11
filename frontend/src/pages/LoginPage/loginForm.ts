import { createForm, field, moreThan } from '@api/forms';

type LoginForm = {
	username: string;
	password: string;
};

export const loginForm = () =>
	createForm<LoginForm>({
		username: field({
			initial: '',
			validator: moreThan(4)
		}),
		password: field({
			initial: '',
			validator: moreThan(7)
		})
	});
