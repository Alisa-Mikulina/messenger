import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from '@utils';

import { AuthPage } from './pages/AuthPage';
import { LoginPage } from './pages/LoginPage';
import { UserProvider } from './utils/UserContext';

export const App: React.FC = () => {
	return (
		<BrowserRouter>
			<UserProvider>
				<Routes>
					<Route path="/" element={<AuthPage />} />
					<Route path="login" element={<LoginPage />} />
					<Route
						path="chats"
						element={
							<ProtectedRoute>
								<p> Successfully logged in</p>
							</ProtectedRoute>
						}
					/>
				</Routes>
			</UserProvider>
		</BrowserRouter>
	);
};
