/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Gamestats from '../components/Gamestats';

export default function Gameboard() {
	const { state: gameLevel } = useLocation();
	if (!gameLevel) return <Navigate to='/' />;

	const containerRef = useRef(null);
	const markerRef = useRef(null);
	const imageRef = useRef(null);
	const [position, setPosition] = useState(null);
	const [targetStates, setTargetStates] = useState(
		Object.assign({}, new Array(gameLevel.targets.length).fill(false))
	);

	const setCurrentPosition = (e) => {
		const imageRect = imageRef.current.getBoundingClientRect();
		const x = e.clientX - imageRect.left - 20;
		const y = e.clientY - imageRect.top - 20;

		setPosition({ x: x, y: y });
	};

	const createIndicator = (isHit) => {
		const element = document.createElement('div');

		element.style.left = `${position.x}px`;
		element.style.top = `${position.y}px`;
		element.style.background = isHit ? '#0a0b' : '#a00b';

		element.className = `absolute w-[40px] h-[40px] rounded-full outline-dashed -outline-offset-[5px] outline-white`;

		containerRef.current.appendChild(element);
		setPosition(null);
	};

	const validatePosition = (target, id) => {
		const img = imageRef.current;

		const cursor = {
			x: Math.floor((position.x / img.clientWidth) * img.naturalWidth),
			y: Math.floor((position.y / img.clientHeight) * img.naturalHeight),
		};

		console.log('Cursor: ', cursor.x, cursor.y);

		const isHit =
			Math.abs(target.position.x - cursor.x) < 40 &&
			Math.abs(target.position.y - cursor.y) < 40;

		if (isHit) setTargetStates((prevState) => ({ ...prevState, [id]: true }));

		createIndicator(isHit);
	};

	return (
		<main className='min-h-screen flex flex-col-reverse justify-center items-center'>
			<div className='relative' ref={containerRef}>
				{position && (
					// the marker when the image is clicked
					<div
						ref={markerRef}
						style={{
							left: `${position.x}px`,
							top: `${position.y}px`,
						}}
						className='absolute bg-gray-700/80 w-[40px] h-[40px] rounded-full outline-dashed -outline-offset-[5px] outline-white'
					>
						<ul className='absolute rounded-md translate-x-[45px] min-w-max flex flex-col backdrop-blur-sm bg-white/30 shadow-xl overflow-hidden'>
							{gameLevel.targets.map((target, id) => (
								<li className='' key={id}>
									<button
										disabled={targetStates[id]}
										onClick={() => validatePosition(target, id)}
										className={`${
											targetStates[id] ? 'line-through' : ''
										} p-2  disabled:bg-gray-700/80 flex items-center gap-2 border-blue-600 w-full hover:opacity-70 font-semibold`}
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
					</div>
				)}
				{/* the image */}
				<button
					className='border rounded-md overflow-hidden shadow-lg'
					onClick={setCurrentPosition}
				>
					<img
						ref={imageRef}
						src={gameLevel.img}
						alt='wallpaperflare-com-wallpaper'
					/>
				</button>
			</div>

			<Gamestats
				gameTargets={gameLevel.targets}
				targetStates={targetStates}
				gameID={gameLevel.gameID}
			/>
		</main>
	);
}
