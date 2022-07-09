import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage';

export const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<p> Hello world </p>} />
				<Route path="login" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	);
};
