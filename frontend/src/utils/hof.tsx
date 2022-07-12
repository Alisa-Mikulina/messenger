import { useUser } from '@packages/context';
import { Navigate } from 'react-router-dom';

type Props = {
	component: React.ReactNode;
};

export const RequiresAuth: React.FC<Props> = ({ component }) => {
	const { user } = useUser();

	if (!user) {
		return <Navigate to="/login" replace={true} />;
	}

	return <>{component}</>;
};

export const NotRequiresAuth: React.FC<Props> = ({ component }) => {
	const { user } = useUser();

	if (user) {
		return <Navigate to="/chats" replace={true} />;
	}

	return <>{component}</>;
};
