/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function Gameboard() {
	const { state: gameLevel } = useLocation();
	if (!gameLevel) return <Navigate to='/' />;

	const containerRef = useRef(null);
	const indicatorRef = useRef(null);
	const markerRef = useRef(null);
	const [position, setPosition] = useState(null);
	const [targetStates, setTargetStates] = useState(
		Object.assign({}, new Array(gameLevel.targets.length).fill(false))
	);

	const setCurrentPosition = (e) => {
		const imgRec = containerRef.current.getBoundingClientRect();

		// 20 is half the size of the marker (40px), subtract to center it
		setPosition({
			x: e.clientX - imgRec.left - 20,
			y: e.clientY - imgRec.top - 20,
		});
	};

	const createIndicator = (isHit) => {
		const element = document.createElement('div');

		element.style.left = `${position.x}px`;
		element.style.top = `${position.y}px`;
		element.style.background = isHit ? '#0a0b' : '#a00b';

		element.className = `absolute w-[40px] h-[40px] rounded-full outline-dashed -outline-offset-[5px] outline-white`;

		containerRef.current.appendChild(element);
		indicatorRef.current = element;
	};

	const validatePosition = (target, id) => {
		const targetSize = 40;
		const subX = target.position.x - position.x;
		const subY = target.position.y - position.y;

		console.log('target: ', target.position.x, target.position.y);
		console.log('position: ', position.x, position.y);

		// divide the targetSize by 2 to get center position
		// multiply by -1 to inverse it
		// this checks if the current position is within radius
		const isHit =
			subX < targetSize / 2 &&
			subY < targetSize / 2 &&
			subX > (targetSize / 2) * -1 &&
			subY > (targetSize / 2) * -1;

		if (isHit) setTargetStates((prevState) => ({ ...prevState, [id]: true }));

		createIndicator(isHit);
	};

	return (
		<div className='relative' ref={containerRef}>
			{position && (
				// the marker when the image is clicked
				<div
					ref={markerRef}
					style={{
						left: `${position.x}px`,
						top: `${position.y}px`,
					}}
					className='absolute bg-gray-400/80 w-[40px] h-[40px] rounded-full outline-dashed -outline-offset-[5px] outline-white'
				>
					<ul className='absolute border rounded-md translate-x-[45px] bg-white/40'>
						{gameLevel.targets.map((target, id) => (
							<li className='' key={id}>
								<button
									disabled={targetStates[id]}
									onClick={() => validatePosition(target, id)}
									className='p-2 disabled:bg-slate-600'
								>
									{target.name}
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
			{/* the image */}
			<button onClick={setCurrentPosition}>
				<img src={gameLevel.img} alt='wallpaperflare-com-wallpaper' />
			</button>
		</div>
	);
}
