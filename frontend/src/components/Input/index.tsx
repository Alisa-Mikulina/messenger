import { useCallback, useState } from 'react';

import { bem } from '@utils';

import styles from './Input.module.css';

type Props = {
	initial?: string;
	className?: string;
	label?: string;
	name: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({ initial, onChange, name, className, label, ...rest }) => {
	const [content, setContent] = useState(initial || '');

	const handleInputChanged = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			onChange(e);
			setContent(e.target.value);
		},
		[onChange]
	);

	return (
		<div className={bem(className, styles.container)}>
			<input
				name={name}
				id={name}
				value={content}
				onChange={handleInputChanged}
				className={styles.input}
				{...rest}
			/>
			{label && (
				<label className={styles.label} htmlFor={name}>
					{label}
				</label>
			)}
		</div>
	);
};
