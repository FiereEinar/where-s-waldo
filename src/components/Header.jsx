import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className='w-full p-3 border-b shadow-md'>
			<Link className='flex w-fit items-center gap-2' to='/'>
				<img className='w-10 rounded-full' src='/log.png' alt='logo' />
				<h1 className='text-xl font-medium'>Character Hunt</h1>
			</Link>
		</header>
	);
}
