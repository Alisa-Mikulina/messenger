import { Navigate } from 'react-router-dom';

import { useUser } from '@utils';

type Props = {
	children: React.ReactNode;
};

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
	const { user } = useUser();

	if (!user) {
		return <Navigate to="/login" replace={true} />;
	}

	return <>{children}</>;
};
