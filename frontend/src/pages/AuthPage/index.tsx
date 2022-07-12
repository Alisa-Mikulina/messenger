import { useUser } from '@packages/context';
import { Navigate } from 'react-router-dom';

export const AuthPage: React.FC = () => {
	const { user } = useUser();

	if (user) {
		return <Navigate to="chats" />;
	}

	return <Navigate to="login" />;
};
