import { Outlet } from 'react-router-dom';

export default function App() {
	return (
		<>
			<header>hello</header>
			<Outlet />
			<footer>
				<p>footer</p>
			</footer>
		</>
	);
}
