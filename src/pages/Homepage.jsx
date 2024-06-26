import { Link } from 'react-router-dom';
import { gameLevels } from '../constants';

export default function Homepage() {
	return (
		<main className='min-h-screen flex flex-col p-3'>
			<section className='flex gap-5'>
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
							<button className='w-full border border-gray-300 rounded-md p-1'>
								{game.name}
							</button>
						</Link>
					</div>
				))}
			</section>
		</main>
	);
}
