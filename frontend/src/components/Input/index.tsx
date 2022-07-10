import React, { useCallback } from 'react';

import { bem } from 'src/utils/utils';

import styles from './Input.module.css';

type InputProps = {
	className?: string;
	label?: string;
	value: string;
	onChange: (newValue: string) => void;
};

type Props = InputProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof InputProps>;

export const Input: React.FC<Props> = ({ value, onChange, name, className, label, ...rest }) => {
	const handleInputChanged = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			onChange(e.target.value);
		},
		[onChange]
	);

	return (
		<div className={bem(className, styles.container)}>
			<input value={value} onChange={handleInputChanged} className={styles.input} {...rest} />
			{label && (
				<label className={styles.label} htmlFor={name}>
					{label}
				</label>
			)}
		</div>
	);
};
