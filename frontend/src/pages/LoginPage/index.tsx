import { useCallback, useState } from 'react';

import { Button, Input } from '@components';
import { noop } from '@utils';

import styles from './LoginPage.module.css';

type LoginParameters = {
	username?: string;
	password?: string;
};

export const LoginPage: React.FC = () => {
	const [loginForm, setLoginForm] = useState<LoginParameters>({});
	const updateForm = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setLoginForm((oldForm: LoginParameters) => ({ ...oldForm, [e.target.name]: e.target.value }));
	}, []);

	const validateForm = () => {
		const { username, password } = loginForm;

		return (username?.length || 0) >= 5 && (password?.length || 0) >= 8;
	};

	return (
		<div className={styles.container}>
			<div className={styles.texts}>
				<h1> Simple messenger </h1>
				<p className={styles.description}>
					Please, enter your username and password <br />
					to login unto the user
				</p>
			</div>
			<div className={styles.loginInputs}>
				<Input name="username" label="Your username" onChange={updateForm} />
				<Input name="password" label="Password" type="password" onChange={updateForm} />
			</div>
			<Button className={validateForm() ? styles.showButton : styles.hideButton} onClick={noop} disabled={true}>
				NEXT
			</Button>
		</div>
	);
};
