import { Link } from 'react-router-dom';
import { gameLevels } from '../constants';

export default function Homepage() {
	return (
		<main>
			<section>
				<h1>Home</h1>
				<div>
					{gameLevels.map((game, i) => (
						<div
							className='w-[20rem] p-3 border border-gray-300 rounded-md shadow-lg'
							key={i}
						>
							<img className='rounded-md mb-2' src={game.img} alt='' />
							<Link to='/game' state={game}>
								<button className='w-full border border-gray-300 rounded-md p-1'>
									{game.name}
								</button>
							</Link>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
