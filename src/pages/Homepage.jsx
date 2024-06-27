import { Link } from 'react-router-dom';
import { gameLevels } from '../constants';
import { Button } from '@/components/ui/button';

export default function Homepage() {
	return (
		<main className='min-h-screen flex flex-col p-10'>
			<section className='flex gap-5 justify-center'>
				{gameLevels.map((game, i) => (
					<div
						className='w-[20rem] p-3 border border-gray-300 rounded-md shadow-lg'
						key={i}
					>
						<img
							className='rounded-md mb-2 w-full h-[13rem] object-cover object-center'
							src={game.img}
							alt='game preview'
						/>
						<Link to='/game' state={game}>
							<Button size='sm' className='w-full'>
								{game.name}
							</Button>
						</Link>
					</div>
				))}
			</section>
			<section className='h-[10rem] w-full flex justify-center items-center'>
				<Link to='/leaderboards'>
					<Button variant='link'>
						<h1 className='mr-1 text-2xl'>Leaderboards</h1>
						<img className='w-8 h-8' src='/leaderboards.svg' alt='' />
					</Button>
				</Link>
			</section>
		</main>
	);
}
