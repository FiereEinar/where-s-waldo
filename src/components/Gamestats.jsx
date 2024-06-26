import Timer from './Timer';

export default function Gamestats({ targetStates, gameTargets }) {
	return (
		<section className='flex flex-wrap justify-center gap-16 p-3'>
			<Timer targetStats={targetStates} />
			<ul className='shadow-md flex gap-5 justify-center border rounded-md flex-wrap'>
				{gameTargets.map((target, id) => (
					<li className='' key={id}>
						<button
							className={`${
								targetStates[id] ? 'line-through' : ''
							} p-2 flex items-center gap-2 border-blue-600 hover:opacity-70 font-semibold`}
						>
							<img
								className='w-8 h-8 rounded-md object-cover'
								src={target.img}
								alt=''
							/>
							<span>{target.name}</span>
						</button>
					</li>
				))}
			</ul>
		</section>
	);
}
