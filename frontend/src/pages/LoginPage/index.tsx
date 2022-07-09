import { Input } from '@components';

import styles from './LoginPage.module.css';

export const LoginPage: React.FC = () => {
	return (
		<div className={styles.container}>
			<p> Simple messenger </p>
			<Input />
		</div>
	);
};
