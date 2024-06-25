import { useEffect, useState } from 'react';

export default function useMouseMove() {
	const [position, setPosition] = useState({
		x: null,
		y: null,
	});

	useEffect(() => {
		const handleMove = (e) => {
			setPosition({
				x: e.pageX,
				y: e.pageY,
			});
		};

		document.addEventListener('mousemove', handleMove);
		return () => document.removeEventListener('mousemove', handleMove);
	});

	return position;
}
