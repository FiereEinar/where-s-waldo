/* eslint-disable react/prop-types */

export default function Dialog({ children, isOpen }) {
	return (
		<>
			{isOpen && (
				<div className='absolute w-screen h-screen overflow-hidden z-50 top-0 overscroll-none bg-white/30 flex justify-center items-center'>
					{children}
				</div>
			)}
		</>
	);
}
