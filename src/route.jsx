import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import Homepage from './pages/Homepage';
import Gameboard from './pages/Gameboard';
import Leaderboards from './pages/Leaderboards';

export default function Route() {
	const route = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			errorElement: <NotFoundPage />,
			children: [
				{
					index: true,
					element: <Homepage />,
				},
				{
					path: '/game',
					element: <Gameboard />,
				},
				{
					path: '/leaderboards',
					element: <Leaderboards />,
				},
			],
		},
	]);

	return <RouterProvider router={route} />;
}
