/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

export default function RecordTimeForm({ time }) {
	const [username, setUsername] = useState('');
	const [loading, isLoading] = useState(false);

	const onFormSubmit = async (e) => {
		e.preventDefault();

		const data = {
			time: time,
			username: username,
		};

		// send to the backend
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<form className='w-full' onSubmit={onFormSubmit}>
			<div className=''>
				<input
					value={username}
					required
					onChange={(e) => setUsername(e.target.value)}
					className='py-1 px-2 ml-1 rounded-md border shadow-md w-full'
					type='text'
					id='username'
				/>
			</div>
			<div className='mt-3 flex justify-center'>
				<button
					className='border py-1 px-5 rounded-md bg-blue-950 text-white hover:opacity-90'
					type='submit'
				>
					Submit
				</button>
			</div>
		</form>
	);
}
