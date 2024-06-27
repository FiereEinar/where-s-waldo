/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Dialog from './Dialog';
import Timer from './Timer';
import RecordTimeForm from './RecordTimeForm';
import { formatTime } from '../utils/utils';
import { useNavigate } from 'react-router-dom';

export default function Gamestats({ targetStates, gameTargets, gameID }) {
	const navigate = useNavigate();
	const [endGameDialog, setEndGameDialog] = useState(false);
	const [time, setTime] = useState('');

	useEffect(() => {
		if (endGameDialog) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	}, [endGameDialog]);

	return (
		<section className='flex flex-wrap justify-center gap-16 m-3 shadow-md border rounded-md'>
			<Dialog isOpen={endGameDialog}>
				<div className='relative p-10 backdrop-blur-sm bg-white/30 shadow-xl rounded-md flex flex-col justify-center items-center'>
					<button
						onClick={() => navigate('/')}
						className='absolute top-2 right-2'
					>
						<img src='/close.svg' alt='close' />
					</button>
					<h1 className='text-xl font-bold mt-4'>You found all the targets!</h1>
					<p>Your Time: {formatTime(time)}</p>
					<p className='text-sm mt-3'>
						Enter your username to record your time.
					</p>
					<RecordTimeForm time={time} gameID={gameID} />
				</div>
			</Dialog>
			<Timer
				targetStats={targetStates}
				timerFinishFn={(time) => {
					setEndGameDialog(true);
					setTime(time);
				}}
			/>
			<ul className=' flex gap-5 justify-center flex-wrap'>
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
