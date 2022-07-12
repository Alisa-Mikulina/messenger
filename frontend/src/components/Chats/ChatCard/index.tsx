import { ChatCardParameters } from '@types';

import { ImageOrLetter } from '../ImageOrLetter';

import styles from './ChatCard.module.css';

export const ChatCard: React.FC<ChatCardParameters> = ({ label, lastMessage }) => {
	return (
		<div className={styles.chatCard}>
			<ImageOrLetter label={label} color="#65aadd" />
			<div className={styles.content}>
				<p className={styles.label}> {label}</p>
				<p className={styles.text}> {lastMessage}</p>
			</div>
		</div>
	);
};
