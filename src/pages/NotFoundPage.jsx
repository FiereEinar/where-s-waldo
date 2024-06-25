import { Link } from 'react-router-dom';

export default function NotFoundPage() {
	return (
		<main className='flex justify-center p-36'>
			<section className='flex flex-col justify-center items-center'>
				<h1 className='text-7xl'>404</h1>
				<h4 className='text-2xl'>Not Found</h4>
				<p>
					Return to{' '}
					<Link to='/' className='underline'>
						Home Page
					</Link>
				</p>
			</section>
		</main>
	);
}
