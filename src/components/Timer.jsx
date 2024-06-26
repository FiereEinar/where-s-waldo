/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from 'react';
import { formatTime } from '../utils/utils';

export default function Timer({ targetStats, timerFinishFn }) {
	const [isRunning, setIsRunning] = useState(true);
	const [elapsedTime, setElapsedTime] = useState(null);
	const startTime = useMemo(() => new Date(), []);

	useEffect(() => {
		if (isRunning) {
			const interval = setInterval(() => {
				setElapsedTime(new Date() - startTime);
			}, 10);

			return () => clearInterval(interval);
		}
	}, [isRunning, startTime]);

	useEffect(() => {
		if (Object.values(targetStats).every((v) => v === true)) {
			setIsRunning(false);
			timerFinishFn(elapsedTime);
		}
	}, [targetStats, timerFinishFn, elapsedTime]);

	return (
		<div className='flex justify-center items-center p-3'>
			<p>{formatTime(elapsedTime)}</p>
		</div>
	);
}
