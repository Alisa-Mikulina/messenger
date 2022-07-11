import { useState } from 'react';

import { bem } from '@utils';

import eye from './res/eye.svg';

import styles from './Input.module.css';

type InputProps = {
	className?: string;
	label?: string;
	value: string;
	type?: string;
	onChange: (newValue: string) => void;
};

type Props = InputProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof InputProps>;

export const Input: React.FC<Props> = ({ value, onChange, name, className, label, type, ...rest }) => {
	const [mode, setMode] = useState(type);
	const handleInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	const togglePassword = () => {
		setMode((oldMode) => (oldMode === 'text' ? 'password' : 'text'));
	};

	return (
		<div className={bem(className, styles.container)}>
			<input value={value} onChange={handleInputChanged} type={mode} className={styles.input} {...rest} />
			{label && (
				<label className={styles.label} htmlFor={name}>
					{label}
				</label>
			)}
			{type === 'password' && (
				<div className={styles.icon} onClick={togglePassword} dangerouslySetInnerHTML={{ __html: eye }} />
			)}
		</div>
	);
};
